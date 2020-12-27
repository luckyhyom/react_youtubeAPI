import React, { useState,useCallback, memo } from 'react';
import { useRef } from 'react';
import styles1 from './search.module.css'

const SearchBar =  memo((props) => {

    const searchRef = useRef();

    const test = useCallback((event) => {
        // const todos2 = [...todos,{text:'Learn Hooks',skill:'snow'}];
        // console.log('in test function : ' + todos);
        // // setTodos({todos2});
        // console.log(todos);
        // console.log(todos2);
        
        event.preventDefault();
        const content = searchRef.current.value;

        content&&props.popContent(content);
    })

return <form onSubmit={test}>
<nav className={styles1.searchBarBack} ><input ref={searchRef} type="search" name="" id="" /></nav>
<button>asd</button>
{/* content={searchRef} -> 이걸로 value를 넘겨주는게 아니라, 이곳이 자식이 되어서 함수에서 값을 넘겨주면 된다. */}
</form>

});

export default SearchBar;