import React from 'react';
import {Image as ImageType} from "../types";

const Image = ({image}: { image: ImageType }) => {
    return <div>
        <img src={image.thumbnailLink}/>
        <p>Author: {image.author}</p>
        <p>Tags: {image.tags}</p>
    </div>;
}

export const Images = ({images}: { images: ImageType[] }) => {
    return <>
        {
            images.map((image, index) =>
                <Image image={image} key={index.toString()}/>)
        }
    </>;
}
