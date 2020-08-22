import React, {useState} from 'react';
import './App.css';
import {Form} from "./components/Form";
import {Image} from "./types";
import Gallery from "react-photo-gallery";

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
