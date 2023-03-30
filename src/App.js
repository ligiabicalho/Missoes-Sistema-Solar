import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
// import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div id="container">
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
