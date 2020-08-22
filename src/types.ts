export type FlickrItem = {
    author: string,
    media: {m: string},
    tags: string,
}

export type FlickrResponse = {
    items: FlickrItem[]
};

export type Image = {
    thumbnailLink: string,
    largeImageLink: string
    author: string,
    tags: string[],
};