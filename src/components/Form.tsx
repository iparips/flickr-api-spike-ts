import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from 'react';
import fetchJsonp from 'fetch-jsonp';
import {Image} from "../types";
import {mapResponseToImages} from "../mapper/mapResponseToImages";

const FLICKR_PUBLIC_FEED_URL = 'https://www.flickr.com/services/feeds/photos_public.gne?format=json';

type PropTypes = {
    setSearchResults: Dispatch<SetStateAction<Image[]>>
};

export const Form = ({setSearchResults}: PropTypes) => {

    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const url = `${FLICKR_PUBLIC_FEED_URL}&tags=${encodeURI(searchTerm)}`;
        fetchJsonp(url, {jsonpCallback: 'jsoncallback'})
            .then(async res => {
                const responseJson = await res.json();
                const images: Image[] = mapResponseToImages(responseJson);
                setSearchResults(images);
            });
    }, [searchTerm]);

    return <form>
        <input type="text" name="searchTerm"
               onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}/>
    </form>
};
