import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isVisible: boolean,
  clockName: string,
};

const allClockNames = ['Rolex', 'Casio', 'Pobeda', 'Royal London ', 'Luch',
  'G-Shock', 'Omega', 'Patek Philippe', 'Cartier', 'Longines', 'Hublot',
  'Tissot', 'Swatch', 'Seiko', 'Vostok', 'Victorinox'];

class App extends React.Component<{}, State> {
  state: State = {
    isVisible: false,
    clockName: allClockNames[0],
  };

  changeVisibility = () => {
    this.setState(({ isVisible }) => ({
      isVisible: !isVisible,
    }));
  };

  changeWatch = () => {
    this.setState({
      clockName: (
        allClockNames[Math.floor(Math.random() * allClockNames.length)]
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        {this.state.isVisible && <Clock name={this.state.clockName} />}

        <div className="App__buttons">
          <button
            type="button"
            className="App__button"
            onClick={this.changeVisibility}
          >
            Show Clock
          </button>

          <button
            type="button"
            className="App__button"
            onClick={this.changeVisibility}
          >
            Hide Clock
          </button>

          <button
            type="button"
            className="App__button"
            onClick={this.changeWatch}
          >
            Buy another watch
          </button>
        </div>
      </div>
    );
  }
}

export default App;
