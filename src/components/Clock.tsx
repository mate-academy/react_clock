import React from 'react';

type Props = {
  name: number,
};

type State = {
  date: Date,
  timerId: NodeJS.Timer | undefined,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
    timerId: undefined,
  };

  componentDidMount() {
    const timerId = setInterval(() => {
      const date: Date = new Date();
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
      this.tick();
    }, 1000);

    this.setState({ timerId });
  }

  componentDidUpdate(prevProps: { name: number }) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.log(
        `The Clock was renamed from ${this.props.name}
        to ${prevProps.name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="clock">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}
