import React from 'react';

type State = {
  currentTime: string
};

type Props = {
  name: number
};

export class Clock extends React.Component<Props, State> {
  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  state = {
    currentTime: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevName: Props) {
    const newName = this.props;

    if (prevName !== newName) {
    // eslint-disable-next-line no-console
      console.log(newName);
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
        <div className="clock">
          <p className="clock__time">{currentTime}</p>
        </div>
      </>
    );
  }
}
