import { ImageApi } from "@/api";

class ImageService {
  static async fetchImage(src: string) {
    try {
      const res = await ImageApi.fetchImage(src);
      return res;
    } catch (err) {
        throw new Error(err instanceof Error ? err.message : "Failed to fetch the image");
    }
  }
}

export { ImageService };
