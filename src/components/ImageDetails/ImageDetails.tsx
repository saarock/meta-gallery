
// Import all the necessary dependencies here

import React from "react";
import ImageDetailsStyles from "../../styles/components/ImageDetails.module.css";

interface ImageDetailsProps {
  /**
   * Metadata object containing key-value pairs of image metadata.
   * Can be null while loading.
   */
  meta: Record<string, any> | null;
}

/**
 * Component to display image metadata details.
 *
 * @param {ImageDetailsProps} props - Component props
 * @param {Record<string, any> | null} props.meta - Metadata object or null while loading
 *
 * @returns {JSX.Element} Rendered metadata list or loading/fallback messages.
 */
const ImageDetails: React.FC<ImageDetailsProps> = ({ meta }) => {
  return (
    <div className={`${ImageDetailsStyles.img_details} mt-4 bg-gray-100 p-4 rounded shadow`}>
      <h2 className="text-lg font-semibold mb-2">Image Metadata</h2>

      {!meta ? (
        <p>Loading metadata...</p>
      ) : Object.keys(meta).length === 0 ? (
        <p>No meta data found</p>
      ) : (
        <ul className="text-sm space-y-1">
          {Object.entries(meta).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value.toString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageDetails;

