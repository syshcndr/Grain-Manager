

import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { HomePage } from "./components/pages/Home";
import { About } from './components/pages/about';
import { MobileDownload } from "./components/pages/Download";
import { InstallationPageweb } from './components/pages/Installation';
import { Aboutuuid } from './components/pages/about copy';
function App() {
  return (
      <div>

        <Router>
        <Switch>
            <Route path='/Home' component={HomePage} />
            <Route path='/About' component={About} />
            <Route path='/Installation' component={InstallationPageweb} />
            <Route path='/Download' component={MobileDownload} />
            <Route path='/Aboutuuid' component={Aboutuuid} />
            <Router exact path="/"><Redirect to="/Home" /></Router>
        </Switch>
        </Router>

      </div>

  );
}

export default App;
