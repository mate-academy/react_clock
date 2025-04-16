import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerClockTime: number = 0;

  isMountedFlag: boolean = false;

  componentDidMount() {
    this.isMountedFlag = true;

    this.timerClockTime = window.setInterval(() => {
      if (this.isMountedFlag) {
        const currentTime = new Date();

        this.setState({ today: currentTime });

        // eslint-disable-next-line no-console
        console.log(currentTime.toUTCString().slice(-12, -4));
      }
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    this.isMountedFlag = false;
    clearInterval(this.timerClockTime);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
