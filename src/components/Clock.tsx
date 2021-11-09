import React from 'react';

type Props = {
  clockName: number | string
};

interface State {
  currentTime: Date,
}

export class Clock extends React.Component<Props, State> {
  timerId?: NodeJS.Timeout;

  state: State = {
    currentTime: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date() });
      // eslint-disable-next-line
      console.log(this.state.currentTime.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const name = prevProps.clockName;

    if (name !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${name} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { currentTime } = this.state;

    return (
      <>
        {currentTime.toLocaleTimeString()}
      </>
    );
  }
}
