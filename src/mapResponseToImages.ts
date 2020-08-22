import {FlickrItem, FlickrResponse, Image} from "./types";

const mapFlickrItemToImage = ({author, media, tags}: FlickrItem): Image => {
    return {
        author,
        // Hard-coding dimensions of images below as a shortcut
        // to meet the requirements of react-photo-gallery dependency
        // to make the presentation of images look ok.
        // Although whether they actually look ok is arguable
        // because these are not true dimensions of the images,
        // so some stretching does take place.
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
