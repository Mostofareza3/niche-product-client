import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import AllProducts from './components/AllProducts/AllProducts';
import Navigation from './components/Home/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/allProducts">
            <Navigation/>
    <AllProducts></AllProducts>
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
