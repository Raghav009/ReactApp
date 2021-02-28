import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import VisibilityFilters from "./VisibilityFilter";
import { Provider } from "react-redux";
import store from "../Redux/store";

const TodoApp = () => {
    // https://codesandbox.io/s/9on71rvnyo?file=/src/index.js:274-281

    // Old Method with HOC
    return (
        <div>
            <Provider store={store}>
            <div className="todo-app">
                <h1>Todo List</h1>
                <AddTodo />
                <TodoList />
                <VisibilityFilters />
            </div>
            </Provider>            
        </div>
    )
}

export default TodoApp;