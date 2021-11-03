import React from 'react';

type Props = {
  name: number,
};

type State = {
  currentTime: string
};

export class Clock extends React.Component<Props, State> {
  timerId: NodeJS.Timeout | null = null;

  state = {
    currentTime: '00:00:00',
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
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
    if (this.timerId) {
      clearInterval(this.timerId);
    }
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
