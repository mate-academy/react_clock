// -----------------------------First var-----------------------------
// import React from 'react';
// import './App.scss';
// import { Clock } from './components/Clock';

// function getRandomName(): string {
//   const value = Date.now().toString().slice(-4);

//   return `Clock-${value}`;
// }

// interface AppState {
//   hasClock: boolean;
//   clockName: string;
// }

// export class App extends React.Component<{}, AppState> {
//   private nameTimerId?: number;

//   // ✅ Сразу инициализируем state
//   state: AppState = {
//     hasClock: true,
//     clockName: 'Clock-0',
//   };

//   componentDidMount() {
//     this.nameTimerId = window.setInterval(() => {
//       this.setState({ clockName: getRandomName() });
//     }, 3300);

//     document.addEventListener('click', this.showClock);
//     document.addEventListener('contextmenu', this.hideClock);
//   }

//   componentWillUnmount() {
//     if (this.nameTimerId) {
//       window.clearInterval(this.nameTimerId);
//     }

//     document.removeEventListener('click', this.showClock);
//     document.removeEventListener('contextmenu', this.hideClock);
//   }

//   showClock = () => {
//     this.setState({ hasClock: true });
//   };

//   hideClock = (event: MouseEvent) => {
//     event.preventDefault();
//     this.setState({ hasClock: false });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>React clock</h1>
//         {this.state.hasClock && <Clock name={this.state.clockName} />}
//       </div>
//     );
//   }
// }

// export default App;

// -----------------------------Second var-----------------------------

import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId: number | null = null;

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);

    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
