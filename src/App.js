import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { RoomProvider } from './Context'

const App = () => {

  return (
    <RoomProvider>

      <Router className="App">
        <NavBar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route path="/singleRoom/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </Router>

    </RoomProvider>
  );
}

export default App;
