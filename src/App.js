import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/configureStore';

import Navbar from './components/Navbar';

import Books from './components/pages/Books';
import Categories from './components/pages/Categories';

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
