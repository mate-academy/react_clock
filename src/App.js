import React from 'react';
import './App.scss';
import Clock from './componnets/Clock/Clock';

class App extends React.Component {
  state = {
    isVisible: true,
    clockName: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevClockName = prevState.clockName;
    const { clockName } = this.state;

    if (prevClockName !== clockName) {
      // eslint-disable-next-line no-console,max-len
      console.log(`The Clock was renamed from ${prevClockName} to ${clockName}`);
    }
  }

  toggleClockVisibility = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  }

  changeClockName = () => {
    const randomNumber = Math.floor(Math.random() * 100);

    this.setState({
      clockName: randomNumber,
    });
  }

  render() {
    const { clockName, isVisible } = this.state;

    return (

      <div className="App card w-25 m-auto">
        <h1 className="card-header text-center">React clock</h1>
        {
          isVisible
            ? <Clock name={clockName} />
            : <h2 className="card-text mt-4 text-center">Clock was hidden</h2>
        }

        <div className="btn-group mt-3" role="group" aria-label="First group">
          <button
            type="button"
            onClick={this.toggleClockVisibility}
            className="btn btn-primary"
          >
            {
              isVisible ? 'Hide Clock' : 'Show Clock'
            }
          </button>

          <button
            type="button"
            onClick={this.changeClockName}
            className="btn btn-success"
          >
            Change Name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
