import {FlickrItem, FlickrResponse, Image} from "../types";

const inferLargeImageLink = (thumbnailLink: string): string => {
    return '';
};

const mapFlickrItemToImage = ({author, media, tags}: FlickrItem): Image => {
    return {
        author,
        tags: tags.split(' '),
        thumbnailLink: media.m,
        largeImageLink: inferLargeImageLink(media.m)
    }
};

export const mapResponseToImages = (response: FlickrResponse): Image[] => {
    const items = response.items || [];
    return items.map(mapFlickrItemToImage);
};