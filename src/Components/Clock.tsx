import React from 'react';

type Props = {
  name: number,
};

type State = {
  time: Date,
  timer: number | null,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
    timer: null,
  };

  componentDidMount(): void {
    const timer = window.setInterval(() => {
      const date = new Date();

      this.setState({ time: new Date() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);

    this.setState({ timer });
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.state.timer !== null) {
      clearInterval(this.state.timer);
    }
  }

  render() {
    return (
      <>
        <p>
          Current time:
          {' '}
          {this.state.time.toLocaleTimeString()}
        </p>
      </>
    );
  }
}
