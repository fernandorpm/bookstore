import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';

import Books from './components/pages/Books';
import Categories from './components/pages/Categories';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route exact path="/">
          <Books />
        </Route>

      </Switch>
    </Router>
  </>
);

export default App;
