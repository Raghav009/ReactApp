import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Routes from './components/Routes';
import MultiRoute from './components/Questions/MultiRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          {
            Routes.map((e, i) => {
              return <Route key={i} exact path={e.path} component={e.component} />
            })
          }
          <Route path="/multi" component={MultiRoute} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
