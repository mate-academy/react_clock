import React from 'react';

type Props = {};

type State = {
  currentDate: Date;
};

export class Clock extends React.Component<Props, State> {
  timerID: NodeJS.Timeout | undefined;

  state: State = {
    currentDate: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        currentDate: new Date(),
      });

      // eslint-disable-next-line
      console.log(this.state.currentDate.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  render() {
    const { currentDate } = this.state;

    return (
      <p>
        Current time:
        {' '}
        { currentDate.toLocaleTimeString()}
      </p>
    );
  }
}
