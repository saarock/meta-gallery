type ImageSide = "LEFT" | "RIGHT";
interface CalculateImageFunctionArgs {
  imageSides: ImageSide;
  currentIndex: number;
  totalIndex: number;
}

export const calculateTheCurrentImageIndex = (
  params: CalculateImageFunctionArgs
): number => {
  if (params.imageSides === "LEFT") {
    // If user click the left side
    if (params.currentIndex === 0) {
      // If the currentIndex is 0 then show the last image
      return params.totalIndex;
    } else {
      // Otherwise always show the less index image item
      return params.currentIndex - 1;
    }
  } else {
    // If user click the right side
    if (params.currentIndex === params.totalIndex) {
      // If the image limit exceed then show the first image
      return 0;
    } else if (params.currentIndex === 0) {
      // Otherwise always show the more index image item by increasing the currentIndex by 1

      return params.currentIndex + 1;
    } else {
      // Otherwise always show the next image by increasing then currentIndex size
      return params.currentIndex + 1;
    }
  }
};
