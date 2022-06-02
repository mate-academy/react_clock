import React from 'react';
import './App.scss';
import { Clock } from './Components';

type State = {
  isClockVisible: boolean;
};

type Props = {

};

class App extends React.Component<Props, State> {
  state: State = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    return (

      <div className="App">
        <div className="appConteiner content">
          <h1>React clock</h1>
          <div data-cy="time" className="timer">
            Current time:
            {' '}
            {isClockVisible && (
              <div className="clolck">
                <Clock />
              </div>
            )}
          </div>
          <div className="buttonsConteiner">
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
          </div>
        </div>

      </div>

    );
  }
}

export default App;
