import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    const planets = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ planets } />
      </div>
    );
  }
}

export default SolarSystem;
