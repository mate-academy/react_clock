import React from 'react';

export class Clock extends React.Component {
  state = {
    date: null,
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date = new Date();

      this.setState({
        date: date.toLocaleTimeString(),
      });

      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <strong data-cy="time">
        {this.state.date}
      </strong>
    );
  }
}
