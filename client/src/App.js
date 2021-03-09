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

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/mymarket" component={User} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/item/:id" component={Item} />
          <Route exact path="/cart" component={Cart} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
