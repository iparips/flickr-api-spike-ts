import React, {useState} from 'react';
import './css/App.css';
import {Form} from "./form";
import {Image} from "./types";
import {Gallery} from "./gallery/Gallery";

function App() {

    const [searchResults, setSearchResults] = useState<Image[]>([]);

    return (
        <div className="App">
            <Form setSearchResults={setSearchResults}/>
            <Gallery photos={searchResults} />
        </div>
    );
}

export default App;
