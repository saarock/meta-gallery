"use client";
// Import all the necessary dependencies here
import React, { useEffect, useState, useCallback } from "react";
import exifr from "exifr";
import ImageCard from "@/components/ImageCard/ImageCard";
import { galleryData } from "@/data";
import { Filter, Loading } from "@/components";
import homeStyle from "../styles/app/Home.module.css";
import { ImageWithDate, Order } from "@/types/app/HomeTypes";
import { useNavigation } from "@/hooks";
import { ImageService } from "@/services";

const Home = () => {
  // Useful hooks
  const [images, setImages] = useState<ImageWithDate[]>([]);
  const [sortOrder, setSortOrder] = useState<Order>("desc"); // set the defaut order accoridingly
  const [loading, setLoading] = useState<boolean>(false);

  const extractMetadata = async () => {
    const results: ImageWithDate[] = [];

    for (const image of galleryData) {
      try {
        const res = await ImageService.fetchImage(image.src);
        if (!res) {
          throw new Error("No response found");
        }
        const blob = await res.blob();
        const metadata = await exifr.parse(blob);

        console.log(metadata);

        // Check multiple possible date fields
        const dateTaken =
          metadata?.DateTimeOriginal?.toISOString?.() ||
          metadata?.ModifyDate?.toISOString?.() ||
          metadata?.CreateDate?.toISOString?.() ||
          metadata?.DateTime?.toISOString?.() ||
          null;

        results.push({
          ...image,
          dateTaken,
        });
      } catch (err) {
        console.error(`Failed to load metadata for ${image.src}`, err);
        alert(err instanceof Error ? err.message : "Failed to fetch the Image");
        results.push({
          ...image,
          dateTaken: undefined,
        });
      }
    }

    return results;
  };

  const sortImages = useCallback((imgs: ImageWithDate[], order: Order) => {
    return [...imgs].sort((a, b) => {
      const aTime = a.dateTaken ? new Date(a.dateTaken).getTime() : 0;
      const bTime = b.dateTaken ? new Date(b.dateTaken).getTime() : 0;

      return order === "asc" ? aTime - bTime : bTime - aTime;
    }); // return the array based on the order
  }, []);

  const onOrderChange = useCallback((order: Order) => {
    setSortOrder(order);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const dataWithMetadata = await extractMetadata();
        const sorted = sortImages(dataWithMetadata, sortOrder);
        setImages(sorted);
      } finally {
        setLoading(false);
      }
    })();
  }, [sortOrder, sortImages]);

  const { showImageDetails } = useNavigation();

  return (
    <div className="flex items-center content-center flex-col">
      <Filter onSortChange={onOrderChange} />
      {loading ? (
        <p>
          {" "}
          <Loading />
          Loading...
        </p>
      ) : (
        <div className={`${homeStyle.images}`}>
          {images.map((currentImageData) => (
            <ImageCard
              src={currentImageData.src}
              alt={currentImageData.alt}
              title={currentImageData.title}
              key={currentImageData.id}
              id={currentImageData.id}
              onClick={() => showImageDetails(currentImageData.id.toString())}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
