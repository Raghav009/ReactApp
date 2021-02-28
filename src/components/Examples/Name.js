import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

const initalState = [
    {
        id: 1,
        Name: 'Raghava',
        Age: 20
    }
];

const nameReduces = (state = initalState, action) => {

    const { type, payload } = action;
    switch (type) {
        case "CreateN":
            return [...state, {
                id: uuidv4(),
                Name: payload.Name,
                Age: payload.Age
            }];
        case "DeleteN":
            const copyState = [...state];
            //Find id of object to remove
            const i = copyState.findIndex(x => x.id === payload.id);
            copyState.splice(i, 1);
            return [...copyState];
        default:
            return state;
    }

}

const ListN = () => {
    const allActivities = useSelector((state) => state.name)
    const [add, setAdd] = useState(false);
    return (
        <div className="row">
            <h2>My Sample 2</h2>
            <button onClick={() => setAdd(!add)}>Add </button>
            {add && <AddC />}
            {allActivities.map(activity => {
                return <Delete key={activity.id} id={activity.id} Name={activity.Name} Age={activity.Age} />
            })}
        </div>
    )
}

const AddC = () => {

    const dispatch = useDispatch();
    const [data, setData] = useState({
        Name: "",
        Age: ""
    })

    const handleChange = (e) => {
        e.persist();
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const addActivity = () => {
        dispatch({
            type: "CreateN",
            payload: {
                Name: data.Name,
                Age: data.Age
            }
        })
    }

    return (
        <div className="row">
            <div className="col">
                <p>Name:</p>
                <input onChange={(e) => handleChange(e)} name={"Name"} placeholder={"Name..."} />
            </div>

            <div className="col">
                <p>Age:</p>
                <input onChange={(e) => handleChange(e)} name={"Age"} placeholder={"Age..."} />
            </div>
            <div className="col">
                <button className="btn btn-primary" onClick={addActivity}>Save</button>
            </div>
        </div>
    )
}

const Delete = ({ Age, id, Name }) => {
    const dispatch = useDispatch();
    const deleteActivity = () => {
        dispatch({
            type: "DeleteN",
            payload: {
                id: id
            }
        })
    }
    return (
        <div className={"activity-wrapper"}>
            <p>Name: {Name}, Age: {Age}</p>
            <button onClick={deleteActivity}>Delete</button>
        </div>
    )
}

export { nameReduces };

export default ListN;