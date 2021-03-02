import React, { createContext, useContext, useState } from "react";
// Example How the Props Work !
const UserContext = createContext();

/*
    < value="{name:Fred}">  <! parent -->
        <div> <!  Child--> 
            <h1>Welcome,Fred!</h1> <! Grand Child-->
            <br />
            <div>Main app content</div>
        </div>
    </>
*/

const Context = () => {
    const [user] = useState({ name: "Fred" });

    return (
        <UserContext.Provider value={user}>
            <Main />
        </UserContext.Provider>
    );
};
const Main = () => {
    return (
        <div>
            <Header />
            <br />
            <div>Main app content</div>
        </div>
    );
};

const Log = (value) => {
    console.log(value);
    return null;
};

const Header = () => {
    const user = useContext(UserContext);
    return (
        <h1>
            Welcome,
            <UserContext.Consumer>
                { user => (<div>{user.name} From Consumer</div> )}
            </UserContext.Consumer>
            {user.name}!
        </h1>
    );
};

export default Context;
