import React, { useState, useMemo } from 'react';

const Memo = () => {

    const skills =["HTML","CSS","JavaScript",'...1000s more']

    const [searchTerm, setSearchTerm] = useState("");

    const searchResults = useMemo(() => {
        return skills.filter(s => s.includes(searchTerm));
    }, [searchTerm])

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
        <div> Memo Component
            <h3>Search Results</h3>
            <input onChange={handleSearchInput} />
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