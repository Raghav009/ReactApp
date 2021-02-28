import React, { useEffect, useState } from 'react'
// simple Component
const List = ({ repos }) => {
    if (!repos) return null;
    let items = repos.items;
    if (!items.length) return <p>No repos, sorry</p>;
    return (
        <ul>
            {items.map((repo) => {
                return <li key={repo.id}>{repo.full_name}</li>;
            })}
        </ul>
    );
};

// Higher Order Component
const WithLoading = (Component) => ({ isLoading, ...props }) => {
    if (!isLoading) return <Component {...props} />;
    return <p>Hold on, fetching data might take some time.</p>;
};

// New Component
const ListWithLoading = WithLoading(List);

const HoC2 = () => {
    const URL = 'https://api.github.com/search/repositories?q=stars:%3E=30000+language:js&sort=stars&order=desc';

    const [data, setData] = useState({
        repos : null,
        loading : true
    })
    useEffect(() => {
        fetch(URL)
        .then((json) => json.json())
        .then((repos) => {
            setData({ loading: false, repos: repos });
        });
    }, [])

    return (
        <ListWithLoading isLoading={data.loading} repos={data.repos}/>
    )
}

export default HoC2;



