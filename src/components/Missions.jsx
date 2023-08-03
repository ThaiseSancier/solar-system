import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div data-testid="missions" id="all_missions">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
              key={ name }
            />
          ))}
        </div>
      </>
    );
  }
}
export default Missions;
