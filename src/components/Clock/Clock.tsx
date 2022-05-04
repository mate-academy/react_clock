import React from 'react';

type Props = {
  name: string;
};

type State = {
  timer: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    timer: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {
    const date: Date = new Date();

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { timer } = this.state;

    return (
      <>
        {timer}
      </>
    );
  }
}
