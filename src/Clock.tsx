import React from 'react';

type Props = {
  name: number,
};

type State = {
  timerId: NodeJS.Timeout,
  currentTime: string
};

export class Clock extends React.Component<Props, State> {
  state = {
    timerId: {} as NodeJS.Timeout,
    currentTime: '00:00:00',
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      const date: Date = new Date();

      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
      this.setState({ currentTime: date.toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.currentTime}
      </p>
    );
  }
}
