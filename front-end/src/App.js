import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Map from "./components/Map/Map";
import Layout from './components/Layout/Layout';

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
          <Layout>
            <Map/>
          </Layout>
      </div>
    );
  }
}

export default App;
