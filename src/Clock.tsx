import React from 'react';

type State = {
  date: string
  timerId: NodeJS.Timeout,
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    date: new Date().toLocaleTimeString(),
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    this.setState(() => {
      setInterval(() => {
        // eslint-disable-next-line no-console
        (console.log(new Date().toLocaleTimeString()));
      }, 1000);
    });

    this.setState({
      date: new Date().toLocaleTimeString(),
    });
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
