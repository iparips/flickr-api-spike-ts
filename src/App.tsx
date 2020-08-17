import React, {useState} from 'react';
import {Form} from './Form';
import {Results} from './Results';
import './App.css';

function App() {

    const [searchResults, setSearchResults] = useState([]);

    return (
        <div className="App">
            <Form />
            {/*<Results date={searchResults}/>*/}
        </div>
    );
}

export default App;
