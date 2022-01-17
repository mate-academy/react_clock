import React from 'react';

type Props = {
  name: number;
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
    this.setState({ timerId: setInterval(this.tick, 1000) });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  tick = () => {
    this.setState({ date: new Date() });
    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());
  };

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.date.toLocaleTimeString()}
      </p>
    );
  }
}
