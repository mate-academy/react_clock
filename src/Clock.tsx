/* eslint-disable no-console */
/* eslint-disable react/sort-comp */
/* eslint-disable @typescript-eslint/semi */
import { Component } from 'react';

type Props = {
  clockName: string,
}

type State = {
  today: Date,
  // clockName: string,
};

// function getRandomName(): string {
//   const value = Date.now().toString().slice(-4);

//   return `Clock-${value}`;
// }

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
    // clockName: 'Clock-0',
  };

  timerId = 0;

  handleDocumentClick = () => {
    const today = new Date();

    this.setState({ today });
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      // console.info({ today: new Date() });
      console.info(this.state.today.toUTCString().slice(-12, -4))
    }, 1000);
    // this.timerId = window.setInterval(() => {
    //   this.setState({ clockName: getRandomName() })
    // }, 3300)

    // document.addEventListener('click', this.handleDocumentClick);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  // componentDidUpdate(_prevProps: Readonly<{}>, prevState: Readonly<State>) {
  //   const { clockName } = this.state;

  //   console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
  // }

  // componentDidUpdate(prevProps: Readonly<Props>, _prevState: Readonly<State>) {
  //   const { clockName } = this.props;

  //   console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
  // }

  componentWillUnmount() {
    // clearInterval(this.timerId);
    window.clearInterval(this.timerId)
    // document.removeEventListener('click', this.handleDocumentClick);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
          {' '}
          time is
          {' '}
        </strong>
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
