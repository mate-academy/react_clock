import React from 'react';

type Props = {
  name: string
};

type State = {
  time: string
};

export class Clock extends React.Component<Props, State> {
  timerID?: number;

  state = {
    time: (new Date()).toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerID = window.setInterval(() => {
      this.setState({ time: (new Date()).toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate({ name }: Props) {
    if (this.props.name !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    // eslint-disable-next-line
    console.log('Time: ', this.state.time);

    return this.state.time;
  }
}
