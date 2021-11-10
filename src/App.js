import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AllProducts from './components/AllProducts/AllProducts';
import Navigation from './components/Home/Navigation/Navigation';
import AuthProvider from './context/AuthProvider';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from '../src/components/PrivateRoute/PrivateRoute'
import Login from './components/Login/Login';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Navigation />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/allProducts">
            <Navigation />
            <AllProducts></AllProducts>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/placeOrder/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
        </Switch>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
