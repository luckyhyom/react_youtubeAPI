import React from 'react';
import { useCallback } from 'react';
import SearchBar from './searchBar';

const Navbar = (props) => {



    const useContent = useCallback((name)=>{
        props.popContent(name);
    })

    return <SearchBar popContent={useContent} />;

};

export default Navbar;