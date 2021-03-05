import React, { useState, useMemo, useEffect } from 'react';

const Memo = () => {

    const [textinp, setTextinp] = InputHook('Init');
    const skills = ["HTML", "CSS", "JavaScript", '...1000s more']

    const [list, setList] = useState(skills);

    const [searchTerm, setSearchTerm] = useState("");

    const searchResults = useMemo(() => {
        return skills.filter(s => s.includes(searchTerm));
    }, [searchTerm])

    // useEffect(() => {
    //     setList(skills.filter(s => s.includes(searchTerm)))
    // }, [searchTerm])

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
        <div> Memo Component
            <input type="text" value={textinp} onChange={(e) => setTextinp(e)} />
            <h3>Search Results</h3>
            <input onBlur={handleSearchInput} />
            <ul>
                {
                    searchResults.map((result, i) => (
                        <li key={i}>{result}</li>
                    ))
                }
            </ul>
        </div>)
        ;
}

// Custom Hook
const InputHook = (init) => {

    const [value, setValue] = useState(init);

    const change = (e) => {
        setValue(e.target.value);
    }

    return [value, change];
}

export default Memo;