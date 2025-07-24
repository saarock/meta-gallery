"use client";
// Import all the necessary dependencies here
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

/**
 * Custom hook to handle navigation in the app.
 *
 * Provides navigation functions to programmatically route
 * to different pages within the Next.js application.
 *
 * Currently supports:
 * - Navigating to the image detail page by image ID.
 *
 * Usage:
 * const { showImageDetails } = useNavigation();
 * showImageDetails('123');
 *
 * @returns {object} Navigation functions.
 */
const useNavigation = () => {
  const router = useRouter();

  /**
   * Navigate to the image details page for the given image ID.
   *
   * @param {string} imageId - The unique identifier of the image to show details for.
   */
  const showImageDetails = useCallback(
    (imageId: string) => {
      router.push(`gallery/${imageId}`);
    },
    [router]
  );


  /**
   * Navigate to the previous page in simple word back to the previous page
   */
  const backToPreviousPage = useCallback(() => {
    router.back();
  }, [router]);


  return {
    showImageDetails,
    backToPreviousPage,
  };
};

export default useNavigation;
