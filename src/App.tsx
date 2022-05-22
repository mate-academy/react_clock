import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type Props = {};

type State = {
  clockName: string;
  isClockVisible: boolean;
};

export class App extends React.Component<Props, State> {
  clockNames = [
    'Центральноавстралийское время',
    'Восточноавстралийское время',
    'Аляскинское время',
    'Атлантическое время',
    'Западноавстралийское время',
    'Центральноафриканское время',
    'Центральноевропейское время',
    'Центральноамериканское время',
    'Восточноафриканское время',
    'Восточноевропейское время',
    'Североамериканское восточное время',
    'Среднее время по Гринвич',
    'Гавайско-алеутское время',
    'Московское время',
    'Горное время',
    'Ньюфаундлендское время',
    'Североамериканское тихоокеанское время',
    'Всемирное координированное время',
    'Западноафриканское время',
    'Западноевропейское время',
  ];

  state = {
    isClockVisible: true,
    clockName: 'Центральноевропейское время',
  };

  clockHide = () => {
    this.setState({ isClockVisible: false });
  };

  clockShow = () => {
    this.setState({ isClockVisible: true });
  };

  changeName = () => {
    if (this.state.isClockVisible) {
      this.setState({
        clockName: this.clockNames[Math.floor(Math.random()
          * this.clockNames.length)],
      });
    }
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <div className="App__buttons">
          <button
            className="App__button"
            type="button"
            onClick={this.clockShow}
            disabled={isClockVisible}
          >
            Show Clock
          </button>
          <button
            className="App__button"
            type="button"
            onClick={this.clockHide}
            disabled={!isClockVisible}
          >
            Hide Clock
          </button>
        </div>
        <div className="App__clockName">
          <button
            className="App__button-clockName"
            type="button"
            onClick={this.changeName}
          >
            Set random name
          </button>
          <span className="App__clock-info">{clockName}</span>
        </div>
        {isClockVisible && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
