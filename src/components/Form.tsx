import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from 'react';
import fetchJsonp from 'fetch-jsonp';
import {Image} from "../types";
import {mapResponseToImages} from "../mapper/mapResponseToImages";
import {useDebounce} from 'use-debounce';

const FLICKR_PUBLIC_FEED_URL = 'https://www.flickr.com/services/feeds/photos_public.gne?format=json';

type PropTypes = {
    setSearchResults: Dispatch<SetStateAction<Image[]>>
};

export const Form = ({setSearchResults}: PropTypes) => {

    const [searchTerm, setSearchTerm] = useState<string>('cats');
    const [debouncedSearchTerm] = useDebounce(searchTerm, 100);

    useEffect(() => {
        if (debouncedSearchTerm === '') {return;}
        const url = `${FLICKR_PUBLIC_FEED_URL}&tags=${encodeURI(debouncedSearchTerm)}`;
        fetchJsonp(url, {jsonpCallback: 'jsoncallback'})
            .then(async res => {
                const responseJson = await res.json();
                const images: Image[] = mapResponseToImages(responseJson);
                setSearchResults(images);
            });
    }, [debouncedSearchTerm]);

    return <form className="searchBox">
        <label className="searchBox__label" htmlFor="searchTerm">Image search</label>
        <input type="text" name="searchTerm" id={searchTerm} value={searchTerm}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}/>
    </form>
};
