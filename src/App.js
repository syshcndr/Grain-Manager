

import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { HomePage } from "./components/pages/Home";
import { About } from './components/pages/about';

function App() {
  return (
      <div>

        <Router>
        <Switch>
            <Route path='/Home' component={HomePage} />
            <Route path='/About' component={About} />
            <Route exact path="/"><Redirect to="/Home" /></Route>
        </Switch>
        </Router>

      </div>

  );
}

export default App;
