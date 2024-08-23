import { Component } from 'react';

type Props = {
  clockName: string;
};

interface StateItems {
  currentTime: Date;
}
export class Clock extends Component<Props, StateItems> {
  state: Readonly<StateItems> = {
    currentTime: new Date(),
  };

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<StateItems>,
  ): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }

    if (prevState.currentTime !== this.state.currentTime) {
      // eslint-disable-next-line no-console
      console.log(`${this.state.currentTime.toUTCString().slice(-12, -4)}`);
    }
  }

  render() {
    const { clockName } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

// type State = {
//   hasClock: boolean;
//   currentTime: Date;
//   clockName: string;
// };

// export class App extends Component<{}, State> {
//   timerId: number | undefined;

//   state: State = {
//     hasClock: true,
//     currentTime: new Date(),
//     clockName: `Clock-${Date.now().toString().slice(-4)}`,
//   };

//   componentDidMount() {
//     if (this.state.hasClock) {
//       this.startTimer();
//     }
//   }

//   componentWillUnmount() {
//     this.clearTimer();
//   }

//   startTimer = () => {
//     this.timerId = window.setInterval(() => {
//       this.setState({
//         currentTime: new Date(),
//         clockName: `Clock-${Date.now().toString().slice(-4)}`,
//       });
//       // eslint-disable-next-line no-console
//       console.log('Current time updated');
//     }, 1000);
//   };

//   clearTimer = () => {
//     if (this.timerId !== undefined) {
//       window.clearInterval(this.timerId);
//     }
//   };

//   render() {
//     const { hasClock, currentTime, clockName } = this.state;

//     return (
//       <div className="App">
//         <h1>React clock</h1>

//         {hasClock && (
//           <div className="Clock">
//             <strong className="Clock__name">{clockName}</strong>
//             {' time is '}
//             <span className="Clock__time">
//               {currentTime.toUTCString().slice(-12, -4)}
//             </span>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
