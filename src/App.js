import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'
import Home from './pages/Home';
import Room from './pages/Room';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
const App = () => {

  return (
    <Router className="App">

      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms" component={Room} />
        <Route path="/singleRoom" component={SingleRoom} />
        <Route component={Error} />
      </Switch>

    </Router>
  );
}

export default App;
