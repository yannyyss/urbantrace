import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Map from "./components/Map/Map";
import Layout from './components/Layout/Layout';
import Router from './routes';

class App extends Component {

  state = {
    //on: true
  }

  homeHandler = () => {
    if (this.state.on) { return <Home />}
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Map/>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
