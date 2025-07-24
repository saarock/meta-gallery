// Import all the necessary dependencies here

export interface ImageProps {
  id: string | number;
  url: string;
  name: string;
}

export interface CardPrpos {
  id: number | string;
  images: ImageProps[];
  title: string;
  price: number;
  sizes: string[];
  onClick?: () => void;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  selectedSize?: string;
}
