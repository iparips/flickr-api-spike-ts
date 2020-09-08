import React from "react";
import {Image} from "../types";

export const Gallery = ({photos}: { photos: Image[] }) => {

    return <div className="wrapper">
        {photos.map((photo: Image) => (
            <article>
                <img src={photo.src} alt=""/>
                <h3>{photo.author}</h3>
                <p>{photo.tags.join(", ")}</p>
            </article>
        ))}
    </div>;
};
