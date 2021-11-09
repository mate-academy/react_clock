import React from 'react';
import { v4 as uuid } from 'uuid';
import { Clock } from './components/Clock';
import './App.scss';

type Props = {};

interface State {
  isVisible: boolean;
  clockName: number | string;
}

class App extends React.Component<Props, State> {
  state: State = {
    isVisible: true,
    clockName: 0,
  };

  visible = () => {
    this.setState({ isVisible: true });
  };

  hidden = () => {
    this.setState({ isVisible: false });
  };

  random = () => {
    this.setState({ clockName: uuid() });
  };

  render() {
    return (
      <div className="app">
        <h1 className="clock__title">React Clock</h1>
        <button
          className="clock__button"
          type="button"
          onClick={this.hidden}
        >
          Hide
        </button>
        <button
          className="clock__button"
          type="button"
          onClick={this.visible}
        >
          Visible
        </button>
        <button
          className="clock__button"
          type="button"
          onClick={this.random}
        >
          Change Name
        </button>
        <h2 className="clock__show">
          Time is:
          {
            this.state.isVisible === true
              ? (<Clock clockName={this.state.clockName} />)
              : (null)
          }
        </h2>
      </div>
    );
  }
}

//
//
// class App extends React.Component<Props, State> {
//   state: State = {
//     isVisible: true,
//     clockName: 0,
//   };
//
//   visible = () => {
//     this.setState({ isVisible: true });
//   };
//
//   hidden = () => {
//     this.setState({ isVisible: false });
//   };
//
//   random = () => {
//     this.setState({ clockName: Math.floor(Math.random() * (100 - 1)) + 1 });
//   };
//
//   render() {
//     return (
//       <div className="App">
//         <h1>React Clock</h1>
//         <button
//           type="button"
//           className="button"
//           onClick={this.visible}
//         >
//           Visible
//         </button>
//         <button
//           type="button"
//           className="button"
//           onClick={this.hidden}
//         >
//           Invisible
//         </button>
//         <button
//           type="button"
//           className="button"
//           onClick={this.random}
//         >
//           Random Name
//         </button>
//         <h2>
//           Time is:
//           {
//             this.state.isVisible === true
//               ? (<Clock clockName={this.state.clockName} />)
//               : (null)
//           }
//         </h2>
//       </div>
//     );
//   }
// }

export default App;
