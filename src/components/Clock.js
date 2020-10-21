import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });

      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);
  }

  render() {
    const { status, name } = this.props;

    return (
      <div>
        <p>{`Name: ${name}`}</p>
        {
          status
            ? <p>{`Current time: ${this.state.date}`}</p>
            : <p>No clocks!</p>
        }
      </div>
    );
  }
}

Clock.propTypes = {
  status: PropTypes.bool.isRequired,
  name: PropTypes.number.isRequired,
};
