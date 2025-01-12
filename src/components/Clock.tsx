import { Component } from 'react';

type ClockProps = {
  clockName: string;
};

type ClockState = {
  currentTime: Date;
  name: string;
};

export class Clock extends Component<ClockProps, ClockState> {
  timeTimerId: NodeJS.Timeout | undefined;

  state: ClockState = {
    currentTime: new Date(),
    name: this.props.clockName,
  };

  componentDidMount() {
    // this.nameTimerId = setInterval(() => {
    //   this.setState(prevState => {
    //     const oldName = prevState.name;
    //     const newName = getRandomName();

    //     // eslint-disable-next-line no-console
    //     // console.warn(`Renamed from ${oldName} to ${newName}`);

    //     return { name: newName };
    //   });
    // }, 3300);

    this.timeTimerId = setInterval(() => {
      const newDate = new Date();

      this.setState({ currentTime: newDate });

      // eslint-disable-next-line no-console
      console.log(newDate.toUTCString().slice(-12, -4));
    }, 1000);
  }

  // componentDidUpdate(_: Readonly<ClockProps>, prevState: ClockState) {
  //   const { name } = this.state;

  //   if (prevState.name !== name) {
  //     // eslint-disable-next-line no-console
  //     console.warn(`Name changed from ${prevState.name} to ${name}`);
  //   }
  // }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    const { clockName } = prevProps;

    if (clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timeTimerId) {
      clearInterval(this.timeTimerId);
    }
  }

  render() {
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
