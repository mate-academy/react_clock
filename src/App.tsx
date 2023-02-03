// import { extend } from 'cypress/types/jquery';
import React from 'react';

import { Clock } from './Clock/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  }

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({hasClock: false})
    });
    
    document.addEventListener('click', (event) => {
      event.preventDefault();

      this.setState({hasClock: true})
    });

    setInterval(() => {
      this.setState({clockName: getRandomName()});
    }, 3300);
  }

  render() {
    const {clockName, hasClock} = this.state;


    return (
      <div className='App'>
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName}/>}
      </div>

    )
  }
}

// export const App: React.FC = () => {
//   const today = new Date();
//   let clockName = 'Clock-0';

//   // This code starts a timer
//   const timerId = window.setInterval(() => {
//     clockName = getRandomName();
//   }, 3300);

//   // this code stops the timer
//   window.clearInterval(timerId);

//   return (
//     <div className="App">
//       <h1>React clock</h1>

//       <div className="Clock">
//         <strong className="Clock__name">
//           {clockName}
//         </strong>

//         {' time is '}

//         <span className="Clock__time">
//           {today.toUTCString().slice(-12, -4)}
//         </span>
//       </div>
//     </div>
//   );
// };
