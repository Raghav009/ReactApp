import React, { useState, useMemo, useEffect } from 'react';

const Memo = () => {

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

export default Memo;