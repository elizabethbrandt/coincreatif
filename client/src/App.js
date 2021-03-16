import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Item from './pages/Item';
import Login from './pages/Login';
import Products from './pages/Products';
import Signup from './pages/Signup';

import { AuthProvider } from "./utils/Auth";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
  <AuthProvider>
    <Router>
      <div>
        <Nav />
        <Switch>

          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/item/:id" component={Item} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path ="/login" component={Login} />

        </Switch>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
