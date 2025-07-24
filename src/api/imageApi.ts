class ImageApi {
    static async fetchImage(src: string) {
        const res = await fetch(src);
        return res;
    }
}

export {ImageApi};