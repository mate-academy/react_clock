import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.clock = setInterval(() => {
      this.tick();

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { clockName } = this.props;
    const time = this.state.date.toLocaleTimeString();

    return (
      <div>
        <p className="App__clock">
          {
            `Current time: ${time}`
          }
        </p>
        <p>
          {`Clock name: ${clockName}`}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
};
