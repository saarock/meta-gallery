export type Order = "asc" | "desc";

export interface ImageWithDate {
  id: number;
  src: string;
  alt: string;
  title: string;
  dateTaken?: string;
}
