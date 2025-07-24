// import { GallaryDataTypes } from "@/types/dataIndex";
// import { useEffect, useState } from "react";

// // Type of order
// type Order = "asc" | "desc";

// // Props your hook needs
// interface UseOrderProps {
//   sortOrder: Order;
//   gallery: GallaryDataTypes[];
// }

// // Return type
// interface UseOrderReturn {
//   sortedImages: GallaryDataTypes[];
// }

// /**
//  * Custom hook to sort images by dateTaken
//  */
// const useOrder = ({ sortOrder, gallery }: UseOrderProps): UseOrderReturn => {
//   const [sortedImages, setSortedImages] = useState<GallaryDataTypes[]>([]);

//   useEffect(() => {
//     const sorted = [...gallery].sort((a, b) => {
//       const aDate = new Date(a?.metadata?.dateTaken || "").getTime();
//       const bDate = new Date(b?.metadata?.dateTaken || "").getTime();
//       return sortOrder === "asc" ? aDate - bDate : bDate - aDate;
//     });

//     setSortedImages(sorted);
//   }, [sortOrder, gallery]);

//   return { sortedImages };
// };

// export default useOrder;
