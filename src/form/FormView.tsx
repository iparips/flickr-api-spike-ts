import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';

type PropTypes = {
    setSearchTerm: Dispatch<SetStateAction<string>>,
    searchTerm: string;
}

export const FormView = ({setSearchTerm, searchTerm}: PropTypes) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return <div className="searchBox">
        <label className="searchBox__label" htmlFor="searchTerm">Image search</label>
        <input type="text" id="searchTerm" value={searchTerm}
               onChange={onChange}/>
    </div>
};
