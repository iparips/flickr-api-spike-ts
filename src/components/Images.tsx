import React from 'react';
import {Image} from "../types";

export const Images = ({images}: {images: Image[]}) => {
    return <pre>
            {JSON.stringify(images, null, 2)}
        </pre>;
}