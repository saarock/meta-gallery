"use client";
// Import all the necessary dependencies here
import { use, useCallback, useEffect, useState } from "react";
import { galleryData } from "@/data";
import EXIF from "exif-js";
import { Button, ImageDetails, Loading } from "@/components";
import { GallaryDataTypes } from "@/types/dataIndex";
import { calculateTheCurrentImageIndex } from "@/utils";
import { MoveLeft, MoveRight } from "lucide-react";
import ImageMetaDataStyles from "../../../styles/app/ImageMetaData.module.css";
import { Props } from "@/types/appIndex";

export default function ImageDetailPage({ params }: Props) {
  const { id } = use(params); // unwrap async params

  // Find initial index of image by id from galleryData
  const initialIndex = galleryData.findIndex((img) => img.id === Number(id));
  const [currentImageShow, setCurrentImageShow] = useState<number | null>(
    initialIndex !== -1 ? initialIndex : null
  );
  const [meta, setMeta] = useState<Record<string, any> | null>(null);

  // When currentImageShow changes, update metadata
  useEffect(() => {
    if (currentImageShow === null) return;

    setMeta(null); // reset metadata when image changes

    const img = new Image();
    img.src = galleryData[currentImageShow].src;

    img.onload = () => {
      EXIF.getData(img as any, function (this: any) {
        const tags = EXIF.getAllTags(this);
        setMeta(tags);
      });
    };
  }, [currentImageShow]);

  // Navigation handlers

  // Move left
  const moveLeft = useCallback(() => {
    if (currentImageShow === null) return;
    const newIndex = calculateTheCurrentImageIndex({
      currentIndex: currentImageShow,
      imageSides: "LEFT",
      totalIndex: galleryData.length - 1,
    });
    setCurrentImageShow(newIndex);
  }, [currentImageShow]);

  // Move right
  const moveRight = useCallback(() => {
    if (currentImageShow === null) return;
    const newIndex = calculateTheCurrentImageIndex({
      currentIndex: currentImageShow,
      imageSides: "RIGHT",
      totalIndex: galleryData.length - 1,
    });
    setCurrentImageShow(newIndex);
  }, [currentImageShow]);

  if (currentImageShow === null) return <p>Image not found</p>;

  // Extract the current index image
  const imageToShow = galleryData[currentImageShow];

  return (
    <div className="p-6 flex items-center gap-4">
      <Button
        onClick={moveLeft}
        text="Left"
        variant="secondary"
        className="left-btn"
      >
        <MoveLeft />
      </Button>

      <div
        className={`${ImageMetaDataStyles.image_details_with_meta_data} flex-1`}
      >
        <ImageDisplay {...imageToShow} />

        {/* Metadata Section */}
        {meta ? (
          <ImageDetails meta={meta} />
        ) : (
          <p>
            <Loading />
            Loading...
          </p>
        )}
      </div>

      <Button
        onClick={moveRight}
        text="Right"
        variant="secondary"
        className="right-btn"
      >
        <MoveRight />
      </Button>
    </div>
  );
}

// ImageDisplay uses GallaryDataTypes props directly
function ImageDisplay({ alt, src, title }: GallaryDataTypes) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <img src={src} alt={alt} width={900} height={400} />
    </>
  );
}
