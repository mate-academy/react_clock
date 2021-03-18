import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });

      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(
        'The Clock was renamed from ',
        prevProps.name,
        ' to ',
        this.props.name,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        {`Current time: ${date.toLocaleTimeString()}`}
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
