// ImageCard props 
export interface ImageCardProps {
  src: string; // src or image location path
  alt: string; // alt for the image
  title: string; // Image name
  id: string| number // id of the image
  onClick: () => void;
}