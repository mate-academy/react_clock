import React from 'react';
// import PropTypes from 'prop-types';

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

  componentWillUnmount() {
    clearInterval(this.timerId);
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
