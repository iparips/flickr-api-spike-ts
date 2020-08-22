import {FlickrItem, FlickrResponse} from "../../types";

export const buildResponseItem = (overrides: Partial<FlickrItem> = {}): FlickrItem => {
    return {
        author: "nobody@flickr.com",
        media: {
            m: "https://live.staticflickr.com/65535/50252823063_785a4d2146_m.jpg"
        },
        tags: "cats kittens pan tilt",
        ...overrides
    }
};

export const buildResponse = (items: FlickrItem[] = [buildResponseItem()]): FlickrResponse => {
    return {
        items
    }
}