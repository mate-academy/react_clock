import React from 'react';

type State = {
  date: string
  timerId: NodeJS.Timeout,
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    date: '',
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <div>
        <p>Current time:</p>
        <p>{this.state.date}</p>
      </div>
    );
  }
}
