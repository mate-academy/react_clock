import React from 'react';
import './App.scss';

// function getRandomName(): string {
//   const value = Date.now().toString().slice(-4);

//   return `Clock-${value}`;
// }

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  // timerID = 0;

  newDateId = 0;

  componentDidMount(): void {
    this.newDateId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);

    // this.timerID = window.setInterval(() => {
    //   this.setState({ clockName: getRandomName() });
    // }, 3300);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    prevState: Readonly<State>,
  ): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.newDateId);
    // window.clearInterval(this.timerID);
  }

  render(): React.ReactNode {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
