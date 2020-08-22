import React, {useState} from 'react';
import './App.css';
import {Form} from "./components/Form";
import {Image} from "./types";
import {Images} from "./components/Images";

function App() {

    const [searchResults, setSearchResults] = useState<Image[]>([]);

    return (
        <div className="App">
            <Form setSearchResults={setSearchResults}/>
            <Images images={searchResults}/>
        </div>
    );
}

export default App;
