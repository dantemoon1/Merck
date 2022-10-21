import React, { useState } from 'react';
import './searchBar.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar() {
    const [searchCategory, setSearchCategory] = useState('Name'); // default search category is Name
    const [searchTerm, setSearchTerm] = useState(''); 
    const [DropdownText, setDropdownText] = useState('Search by');

    const handleSearchCategoryChange = (event) => {
        setSearchCategory(event.target.text);
        setDropdownText(event.target.text);
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('A search was submitted\n\nSearch Term: ' + searchTerm + '\n\nSearch Category: ' + searchCategory);
        //make a call to the backend to search for this term
    }

    return (
        <div className="searchBar">
            <div id='bar'>
                <InputGroup>
                    <Form.Control onChange={handleSearchTermChange}/>
                    <DropdownButton align="end" title={DropdownText}>
                        <Dropdown.Item onClick={handleSearchCategoryChange}>Name</Dropdown.Item>
                        <Dropdown.Item onClick={handleSearchCategoryChange}>Fill with</Dropdown.Item>
                        <Dropdown.Item onClick={handleSearchCategoryChange}>other search</Dropdown.Item>
                        <Dropdown.Item onClick={handleSearchCategoryChange}>options</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
            </div>
            &nbsp;
            <div id='submit'>
                <input type="submit" value="Search" onClick={handleSubmit} />
            </div>
        </div>

    );
}

export default SearchBar;