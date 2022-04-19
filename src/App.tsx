// import React from 'react';
// import { Clock } from './Clock';
// import './App.scss';

// type State = {
//   isClockVisible: boolean;
//   clockName: number;
// };

// export class App extends React.Component<{}, State> {
//   state = {
//     isClockVisible: true,
//     clockName: 0,
//   };

//   createRandomName = () => {
//     if (this.state.isClockVisible) {
//       this.setState({
//         clockName: Math.round(Math.random() * 1000),
//       });
//     }
//   };

//   render() {
//     const { isClockVisible, clockName } = this.state;

//     return (
//       <div className="clock__block">
//         <h1>React clock</h1>

//         { isClockVisible && <Clock name={clockName} /> }

//         <div className="buttons">
//           <button
//             className="show button"
//             type="button"
//             onClick={() => this.setState({ isClockVisible: true })}
//           >
//             Show
//           </button>
//           <button
//             className="hide button"
//             type="button"
//             onClick={() => this.setState({ isClockVisible: false })}
//           >
//             Hide
//           </button>
//         </div>

//         { isClockVisible && (
//           <button
//             className="random button"
//             type="button"
//             onClick={this.createRandomName}
//           >
//             Set random name
//           </button>
//         )}
//       </div>
//     );
//   }
// }

// ----------------------------- with hooks -----------------//

import React, { useState } from 'react';
import { Clock } from './Clock';
import './App.scss';

export const App: React.FC = () => {
  const [clockName, setClockName] = useState(0);
  const [isClockVisible, setIsClockVisible] = useState(true);

  const createRandomName = () => {
    if (isClockVisible) {
      setClockName(Math.round(Math.random() * 1000));
    }
  };

  return (
    <div className="clock__block">
      <h1>React clock</h1>

      { isClockVisible && <Clock name={clockName} /> }

      <div className="buttons">
        <button
          className="show button"
          type="button"
          onClick={() => setIsClockVisible(true)}
        >
          Show
        </button>
        <button
          className="hide button"
          type="button"
          onClick={() => setIsClockVisible(false)}
        >
          Hide
        </button>
      </div>

      { isClockVisible && (
        <button
          className="random button"
          type="button"
          onClick={createRandomName}
        >
          Set random name
        </button>
      )}
    </div>
  );
};
