import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Signup from './pages/Signup';
import User from './pages/UserMarket';
import Search from './components/Nav/Searchbar';
import Footer from './pages/Footer/index';
import { AuthProvider } from "./utils/Auth";
import PrivateRoute from "./utils/PrivateRoute";
import Us from "./pages/Us/index.js"

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
          <PrivateRoute exact path="/cart" component={Cart} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/us" component={Us} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </AuthProvider>
  );
}

export default App;
