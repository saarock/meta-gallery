"use client";

// Import all the necessary dependencies here
import { ImageCardProps } from "@/types/componentIndex";
import Image from "next/image";
import React from "react";
import imageCardStyles from "../../styles/components/ImageCard.module.css";
import { useNavigation } from "@/hooks";

/**
 * ImageCard Component
 *
 * Displays a single image with an overlay title on hover.
 *
 * @component
 * @param {ImageCardProps} props - The props for the image card component.
 * @param {string} props.src - The image source URL.
 * @param {string} props.alt - The alt text for the image (used for accessibility).
 * @param {string} props.title - The title or label displayed in the overlay on hover.
 *
 * @returns {JSX.Element} A styled image component with hover overlay.
 */
const ImageCard: React.FC<ImageCardProps> = ({ src, alt, title, id }) => {
  const { showImageDetails } = useNavigation();

  return (
    <div
      className={imageCardStyles.img_card}
      onClick={() => showImageDetails(id.toString())}
    >
      <Image src={src} alt={alt} height={200} width={200} />
      <div className={imageCardStyles.overlay_bottom}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ImageCard;
