import { createStore } from "redux";
import rootReducer from "./Reducers";

const Debug = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default createStore(rootReducer, Debug);