import React, {useState} from 'react';
import './App.css';
import {Form} from "./components/Form";
import {Image} from "./types";

function App() {

    const [searchResults, setSearchResults] = useState<Image[]>([]);

    return (
        <div className="App">
            <Form setSearchResults={setSearchResults}/>
            {/*<Results date={searchResults}/>*/}
        </div>
    );
}

export default App;
