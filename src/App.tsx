import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {

}

type State = {
  time: Date | null;
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<Props, State> {
  /*
    const today = new Date();
    let clockName = 'Clock-0';

    // this code stops the timer
    window.clearInterval(timerId);
  */

  state = {
    time: null,
    clockName: 'Clock-0',
    hasClock: true
  }  
    // This code starts a timer
  timerId = window.setInterval(() => {
    this.setState({
      clockName: this.getRandomName()
    })
  }, 3300);

  timer = window.setInterval(() => {
    this.setState({
      time: new Date()
    })
    // eslint-disable-next-line no-console
    console.log(this.state.time);
  }, 1000)

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);
    
    return `Clock-${value}`;
  }

  hiddenClock = () => this.setState({ hasClock: false });
  showClock = () => this.setState({hasClock: true})

  hasClockControl = window.addEventListener('contextmenu', (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    this.hiddenClock();
    window.clearInterval(this.timer);
  });

  showClockOnLeftClick = window.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();

    this.showClock();
    this.timer = window.setInterval(() => {
      this.setState({
        time: new Date()
      })
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
    this.timer;
  })

  componentDidMount() {
    this.setState({time: new Date()});
    this.timerId;
    this.timer;
    this.hasClockControl;
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): void {
    if(prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }

  render() {
    return (
        <div className="App">
        <h1>React clock</h1>
  
        {
          this.state.hasClock
            &&
          <Clock name={this.state.clockName} time={this.state.time} />
        }
      </div>
    );
  }
};
