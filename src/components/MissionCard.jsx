import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission_card">
        <p data-testid="mission-name" className="cardName">
          { name }
        </p>
        <p data-testid="mission-year" className="missionData">
          { year }
        </p>
        <p data-testid="mission-country" className="missionData">
          { country }
        </p>
        <p data-testid="mission-destination" className="missionData">
          { destination }
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  destination: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};
export default MissionCard;
