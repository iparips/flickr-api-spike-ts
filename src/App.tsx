import React, {useState} from 'react';
import './App.css';
import {Form} from "./Form";

function App() {

    const [searchResults, setSearchResults] = useState([]);

    return (
        <div className="App">
            <Form/>
            {/*<Results date={searchResults}/>*/}
        </div>
    );
}

export default App;
