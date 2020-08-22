import React, {ChangeEvent, useEffect, useState} from 'react';
import fetchJsonp from 'fetch-jsonp';

const FLICKR_PUBLIC_FEED_URL = 'https://www.flickr.com/services/feeds/photos_public.gne?tags=cats&format=json';

export const Form = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        fetchJsonp(FLICKR_PUBLIC_FEED_URL, {jsonpCallback: 'jsoncallback'})
            .then(async res => {
                const x = await res.json()
                console.log(x);
            });
    }, [searchTerm]);

    return <form>
        <input type="text" name="searchTerm"
               onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}/>
    </form>
};