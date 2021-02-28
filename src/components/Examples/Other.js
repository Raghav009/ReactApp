import { createStore, combineReducers } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

const initalState = [
    {
        id: 1,
        author: "Sample",
        title: "Details"
    }
];

const activitiesReducer = (state = initalState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "Create":
            return [...state, {
                id: uuidv4(),
                author: payload.author,
                title: payload.title
            }];
        case "Delete":
            const copyState = [...state];
            //Find id of object to remove
            const i = copyState.findIndex(x => x.id === payload.id);
            copyState.splice(i, 1);
            return [...copyState];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    activities: activitiesReducer
});

const store = createStore(rootReducer);

const ReduxC = () => {

    return (
        <div className="row">
            Redux - Hooks 2
            <Provider store={store}>
                <ListC />
            </Provider>
        </div>
    )
}

export default ReduxC;

const ListC = () => {
    const allActivities = useSelector((state) => state.activities)
    const [add, setAdd] = useState(false);
    return (
        <div className="row">
            <h2>My Workouts</h2>
            <button onClick={() => setAdd(!add)}>Add Activity</button>
            {add && <AddC />}
            {allActivities.map(activity => {
                return <Delete key={activity.id} id={activity.id} author={activity.author} title={activity.title} />
            })}
        </div>
    )
}

const AddC = () => {

    const dispatch = useDispatch();
    const [data, setData] = useState({
        author: "",
        title: ""
    })

    const handleChange = (e) => {
        e.persist();
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const addActivity = () => {
        dispatch({
            type: "Create",
            payload: {
                author: data.author,
                title: data.title
            }
        })
    }

    return (
        <div className="row">
            <div className="col">
                <p>Author:</p>
                <input onChange={(e) => handleChange(e)} name={"author"} placeholder={"Author..."} />
            </div>

            <div className="col">
                <p>Title:</p>
                <input onChange={(e) => handleChange(e)} name={"title"} placeholder={"Title..."} />
            </div>
            <div className="col">
                <button className="btn btn-primary" onClick={addActivity}>Save</button>
            </div>
        </div>
    )
}

const Delete = ({ author, id, title }) => {
    const dispatch = useDispatch();
    const deleteActivity = () => {
        dispatch({
            type: "Delete",
            payload: {
                id: id
            }
        })
    }
    return (
        <div className={"activity-wrapper"}>
            <p>Author: {author}, Title: {title}</p>
            <button onClick={deleteActivity}>Delete</button>
        </div>
    )
}
