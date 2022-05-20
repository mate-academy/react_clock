import React from 'react';

type Timer = NodeJS.Timer;

type Props = {
  name: string,
};

export class Clock extends React.Component<Props> {
  timerID!: Timer;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({
        date: new Date(),
      }),
      1000,
    );
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(
        `The Clock was renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  showTime() {
    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());

    return this.state.date.toLocaleTimeString();
  }

  render() {
    return this.showTime();
  }
}
