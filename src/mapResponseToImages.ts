import {FlickrItem, FlickrResponse, Image} from "./types";

const mapFlickrItemToImage = ({author, media, tags}: FlickrItem): Image => {
    return {
        author,
        width: 1,
        height: 1,
        tags: tags.split(' '),
        src: media.m,
    }
};

export const mapResponseToImages = (response: FlickrResponse): Image[] => {
    const items = response.items || [];
    return items.map(mapFlickrItemToImage);
};
