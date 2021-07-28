import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './components/NavBar'
import Home from './components/HomeComp'
import UserComp from './components/UserComp'
import ItemsComp from './components/ItemsComp'

function App() {
  return (
    <Router>
      <div className="App">
          <div>{<NavBar />}</div>
          <div id="contents">
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/user-page"><UserComp /></Route>
              <Route exact path="/items-page"><ItemsComp /></Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;