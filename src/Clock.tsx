import React from 'react';

type Props = {
  name: string;
};
type State = {
  date: string | Date;
};

export class Clock extends React.Component<Props, State> {
  timerID: number | undefined;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    // eslint-disable-next-line
    console.log('Time: ', this.state.date.toLocaleTimeString());

    return (
      this.state.date.toLocaleTimeString()
    );
  }
}
