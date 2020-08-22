export type FlickrItem = {
    author: string,
    media: {m: string},
    tags: string,
}

export type FlickrResponse = {
    items: FlickrItem[]
};

export type Image = {
    src: string,
    width: number,
    height: number,
    largeImageLink: string
    author: string,
    tags: string[],
};
