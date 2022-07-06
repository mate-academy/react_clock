import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import FetchName from './helper/FetchName';

class App extends React.Component {
  state = {
    clockName: 'FRUIT',
    isClockVisible: true,
  };

  changeNameHandler = async () => {
    FetchName();

    this.setState({
      clockName: await FetchName(),
    });
  };

  render() {
    return (
      <div>
        <Clock
          name={this.state.clockName}
          isClockVisible={this.state.isClockVisible}
        />
        <button
          type="button"
          onClick={() => {
            if (!this.state.isClockVisible) {
              this.setState({
                isClockVisible: true,
              });
            }

            return this.setState({
              isClockVisible: true,
            });
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            if (this.state.isClockVisible) {
              this.setState({
                isClockVisible: false,
              });
            }

            return this.setState({
              isClockVisible: false,
            });
          }}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.changeNameHandler}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
