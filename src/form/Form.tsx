import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';

type PropTypes = {
    setSearchTerm: Dispatch<SetStateAction<string>>,
    searchTerm: string;
}

export const FormView = ({setSearchTerm, searchTerm}: PropTypes) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    return <form className="searchBox">
        <label className="searchBox__label" htmlFor="searchTerm">Image search</label>
        <input type="text" name="searchTerm" id={searchTerm} value={searchTerm}
               onChange={onChange}/>
    </form>
};
