import React from 'react';
import './App.scss';
import { Clock } from './Components';

type State = {
  isClockVisible: boolean,
  timerColor: string,
};

type Props = {

};
const arrOfColors = [
  '#25a5db',
  '#261ac9',
  '#940d69',
  '#1bd170',
  '#e1f00e',
  '#f00ed5',
  '#b30c25',
  '#54c2c4',
  '#5adb46',
  '#6f31a8',
];

class App extends React.Component<Props, State> {
  state: State = {
    isClockVisible: true,
    timerColor: 'red',
  };

  render() {
    const { isClockVisible } = this.state;

    return (

      <div className="app">
        <div className="app__conteiner content">
          <h1>React clock</h1>
          <div data-cy="time" className="timer">
            {isClockVisible && (
              <div className="App__clolck">
                <Clock color={this.state.timerColor} />
              </div>
            )}
          </div>
          <div className="app__buttonsConteiner">
            <button
              className="button is-link is-outlined"
              type="button"
              onClick={
                () => this.setState({ isClockVisible: true })
              }
            >
              Show time
            </button>

            <button
              className="button is-link is-outlined"
              type="button"
              onClick={
                () => this.setState({ isClockVisible: false })
              }
            >
              Hide time
            </button>

            <button
              className="button is-link is-outlined"
              type="button"
              onClick={
                () => this.setState(
                  {
                    timerColor: arrOfColors[Math.floor(Math.random()
                    * arrOfColors.length)],
                  },
                )
              }
            >
              Set random color
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
