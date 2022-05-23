import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean,
  secWaisted: number,
  clockName: number,
};

class App extends React.Component <Props, State> {
  state = {
    secWaisted: 0,
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 999),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({ secWaisted: prevState.secWaisted + 1 }));
    }, 1000);
  }

  someFunction = () => {
    // eslint-disable-next-line no-console
    console.log('Hello WOrld');
  };

  sttChanger = () => {
    this.setState((prevState) => ({
      isClockVisible: !prevState.isClockVisible,
    }));
  };

  show = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hide = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  nameRandomizer = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 999),
    });
  };

  render() {
    return (
      <div className="App">
        <fieldset>
          <legend>
            <mark>
              this is App component
            </mark>
          </legend>
          <h2>
            time of your life waisted on this page =&#160;
            {new Date(this.state.secWaisted * 1000).toISOString().substr(11, 8)}
          </h2>
          <button type="button" onClick={this.someFunction}>
            Hello World to console
          </button>
          <br />
          <button
            type="button"
            onClick={this.nameRandomizer}
          >
            <h2>
              Set random name for a clock
            </h2>
          </button>
          <button
            type="button"
            onClick={this.sttChanger}
          >
            <h2>
              trigger state button
            </h2>
          </button>
          <br />
          <button
            type="button"
            onClick={this.show}
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={this.hide}
          >
            Hide Clock
          </button>
          <span>
            &#160;🢀 these buttons are just for tests,
            &#160;better use my &#34;trigger state&#34; button above 😉
          </span>
          { this.state.isClockVisible && <Clock name={this.state.clockName} />}
          <br />
        </fieldset>
      </div>
    );
  }
}

export default App;
