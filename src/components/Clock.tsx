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

  componentDidUpdate(oldName: Props) {
    if (oldName.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(
        `The Clock was renamed from ${oldName.name} to ${this.props.name}`,
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
