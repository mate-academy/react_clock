import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerSeconds = setInterval(() => {
      this.setState({
        date: new Date(),
        // console.log(this.state.date.toLocaleTimeString()),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerSeconds);
  }

  render() {
    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());

    return (
      <div>
        <p>
          Current time:
          {' '}
        </p>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
