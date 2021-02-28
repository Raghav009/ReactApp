import React, { createContext, useContext, useState } from 'react';
// Example How the Props Work !
const UserContext = createContext()

const Content = () => {
    const [user] = useState({ name: "Fred" });
    return (
        <UserContext.Provider value={user}>
            <Main />
        </UserContext.Provider>
    );
}
const Main = () => {
    return (
        <div>
            <Header />
            <br />
            <div>Main app content</div>
        </div>
    )
}
const Header = () => {
    const user = useContext(UserContext)
    return <h1>Welcome,{user.name}!</h1>;
}

export default Content;