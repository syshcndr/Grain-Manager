

import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { HomePage } from "./components/pages/Home";
import { About } from './components/pages/about';
import { MobileDownload } from "./components/pages/Download";
function App() {
  return (
      <div>

        <Router>
        <Switch>
            <Route path='/Home' component={HomePage} />
            <Route path='/About' component={About} />
            <Route path='/Installation' component={About} />
            <Route path='/Download' component={MobileDownload} />
            <Route exact path="/"><Redirect to="/Home" /></Route>
        </Switch>
        </Router>

      </div>

  );
}

export default App;
