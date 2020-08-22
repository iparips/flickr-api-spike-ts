import {FlickrResponse, Image} from "../../types";
import {buildResponse, buildResponseItem} from "./buildResponse";
import {mapResponseToImages} from "../mapResponseToImages";

describe('mapResponseToImages', () => {
    let response: FlickrResponse;
    const author = "Bob";
    const thumbnailLink = "link";
    const tags = ["cats","kittens"];

    beforeEach(() => {
        const items = buildResponseItem({
            author,
            tags: tags.join(" "),
            media: {
                m: thumbnailLink
            },
        })
        response = buildResponse([items])
    });

    it('returns one image', () => {
        const images: Image[] = mapResponseToImages(response);
        expect(images.length).toEqual(1);
    });

    it('maps author', () => {
        const image: Image = mapResponseToImages(response)[0];
        expect(image.author).toEqual(author);
    });

    it('maps tags string into array', () => {
        const image: Image = mapResponseToImages(response)[0];
        expect(image.tags).toEqual(tags);
    });

    it('maps thumbnail link', () => {
        const image: Image = mapResponseToImages(response)[0];
        expect(image.thumbnailLink).toEqual(thumbnailLink);
    });

});