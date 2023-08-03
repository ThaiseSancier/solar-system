import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div data-testid="solar-system" id="solar_sistem">
          {planets.map(({ name, image }) => (
            <PlanetCard planetName={ name } planetImage={ image } key={ name } />
          ))}
        </div>
      </>
    );
  }
}

export default SolarSystem;
