import React from 'react';

type State = {
  time: string;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toLocaleTimeString(),
  };

  timingFunction = setInterval(() => {
    this.setTime();
  }, 1000);

  componentDidMount() {
    return this.timingFunction;
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timingFunction);
  }

  setTime = () => {
    const date = new Date();
    const dateToString = date.toLocaleTimeString();

    this.setState({ time: dateToString });
    // eslint-disable-next-line
    console.log(dateToString);
  };

  render() {
    const { time } = this.state;

    return time;
  }
}
