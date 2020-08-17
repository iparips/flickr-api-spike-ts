import React, {ChangeEvent, useEffect, useState} from 'react';

const FLICKR_PUBLIC_FEED_URL = 'https://www.flickr.com/services/feeds/photos_public.gne?tags=cats&jsoncallback=getFlickrData&format=json';

export const Form = () => {

    const handleData = (data: any) => {
        alert(data);
    };

    const [searchTerm, setSearchTerm] = useState<string>('');

    // @ts-ignore
    window.getFlickrData = (data) => {
        handleData(data);
    };

    useEffect(() => {
        const cb = document.getElementById('callback');
        if (cb) {cb.remove();}
        const s = document.createElement('script');
        s.id = 'callback';
        s.type = 'text/javascript';
        s.src = `https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=getFlickrData&format=json&tags=${searchTerm.split(' ').join(',')}&tagmode=any`;
        document.getElementsByTagName('head')[0].appendChild(s);
    }, [searchTerm]);

    return <form>
        <input type="text" name="searchTerm"
               onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}/>
    </form>
};