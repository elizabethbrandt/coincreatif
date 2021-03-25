import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Item from './pages/Item';
import Login from './pages/Login';
import Products from './pages/Products';
import Signup from './pages/Signup';
import User from './pages/UserMarket';
import Search from './components/Nav/Searchbar'

import { AuthProvider } from "./utils/Auth";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
  <AuthProvider>
    <Router>
      <div>
        <Nav />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/mymarket" component={User} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/item" component={Item} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/search" component={Search} />

        </Switch>
      </div>
    </Router>
  </AuthProvider>
  );
}

export default App;
