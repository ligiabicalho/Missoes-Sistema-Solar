import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    // const { name, imagem } = planets;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet, i) => (
          <PlanetCard
            key={ i }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
