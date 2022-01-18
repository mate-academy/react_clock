import React from 'react';

type State = {
  date: string,
  timerId: NodeJS.Timer | undefined,
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    date: new Date().toLocaleTimeString(),
    timerId: undefined,
  };

  componentDidMount() {
    const timerId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);

    this.setState({ timerId });
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log(this.state.date);
  }

  componentWillUnmount() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId);
    }
  }

  render() {
    return (
      <b className="date">
        {this.state.date}
      </b>
    );
  }
}
