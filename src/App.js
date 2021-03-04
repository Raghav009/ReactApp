import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Hooks from './components/Hooks/Hooks';
import LazyC from "./components/Lazy/Lazy";
import Rest from "./components/Examples/Rest";
import Event from './components/Events/Event'
import TodoApp from './components/Redux-components/TodoApp';
import ReduxHooks from "./components/Examples/ReduxHooks";
import ReduxC from "./components/Examples/Other";
import Question from "./components/Questions/Questions"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Hooks} />
          <Route exact path="/lazy" component={LazyC} />
          <Route path="/example" component={Rest} />
          <Route path="/events" component={Event} />
          <Route path="/redux" component={TodoApp} />
          <Route path="/reduxhooks" component={ReduxHooks} />
          <Route path="/redux2" component={ReduxC} />
          <Route path="/questions" component={Question} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
