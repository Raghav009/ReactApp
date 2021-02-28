import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// Initial State 
const initialState = {
    counter: 0
};

// Add Root Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Inc':
            return { counter: state.counter + 1 };
        case 'Dec':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
}

const Debug = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Create Store 
const store = createStore(rootReducer, Debug);

const ReduxHooks = () => {

    return (
        <div className="row">
            Redux - Hooks
            <Provider store={store}>
                <Counter />
                <Inc />
                <Dec />
            </Provider>
        </div>
    )
}

const Counter = () => {
    const counter = useSelector(state => state.counter);

    return (
        <div className="col">
            {counter}
        </div>
    )
}

const Inc = () => {
    const dispatch = useDispatch();

    return (
        <div className="col">
            <button onClick={() => dispatch({ type: 'Inc' })}>Inc</button>
            {/* <button onClick={() => dispatch({ type: 'Dec' })}>Dec</button> */}
        </div>
    )
}

const Dec = () => {
    const dispatch = useDispatch();

    return (
        <div className="col">
            {/* <button onClick={() => dispatch({ type: 'Inc' })}>Inc</button> */}
            <button onClick={() => dispatch({ type: 'Dec' })}>Dec</button>
        </div>
    )

}

export default ReduxHooks;