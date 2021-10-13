import React from 'react';

type State = {
  currentDate: Date;
};

export class Clock extends React.Component<{}, State> {
  time? : number;

  state: State = {
    currentDate: new Date(),
  };

  componentDidMount() {
    this.time = window.setInterval(() => {
      this.setState({
        currentDate: new Date(),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.currentDate.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.currentDate.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}
