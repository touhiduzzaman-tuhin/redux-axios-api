import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import './App.css';
import User from './components/User/User';
import RandomUser from './components/RandomUser/RandomUser';
import Country from './components/Country/Country';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/user'>
          <User></User>
        </Route>
        <Route path='/randomUser'>
          <RandomUser></RandomUser>
        </Route>
        <Route path='/country'>
          <Country></Country>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
