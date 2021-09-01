import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {
  listOfNames: string[];
};

type State = {
  clockName: string | null;
  isClockVisible: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: null,
    isClockVisible: true,
  };

  getRandomName = (names: string[]) => {
    const randomIndex = Math.floor(Math.random() * names.length);

    return names[randomIndex];
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <div className="App__wrapper">
          <h1>
            React clock
          </h1>
          {isClockVisible && <Clock name={clockName} />}
          <div className="App__buttons">
            <button
              className="App__button"
              type="button"
              onClick={() => {
                this.setState({ isClockVisible: true });
              }}
            >
              Show clock
            </button>
            <button
              className="App__button"
              type="button"
              onClick={() => {
                // eslint-disable-next-line
                this.setState({ clockName: this.getRandomName(this.props.listOfNames) });
              }}
            >
              Set random name
            </button>
            <button
              className="App__button"
              type="button"
              onClick={() => {
                this.setState({ isClockVisible: false });
              }}
            >
              Hide clock
            </button>
          </div>
        </div>
      </div>
    );
  }
}
