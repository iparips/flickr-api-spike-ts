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
    author: string,
    tags: string[],
};
