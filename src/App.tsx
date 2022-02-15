import React from 'react';
import Clock from './components/Clock';
import './App.scss';

type Props = {
  clockName?: string,
};

type State = {
  clockVisible: boolean,
  clockName: string,
};

class App extends React.Component<Props, State> {
  state = {
    clockVisible: true,
    clockName: '...',
  };

  showClock = () => {
    this.setState({ clockVisible: true });
  };

  hideClock = () => {
    this.setState({ clockVisible: false });
  };

  // changeName = () => {
  //   const result = (document.getElementById('myinput').value).toString() | '!!!';

  //   this.setState({ clockName: result });
  // };

  changeName = () => {
    const randomChars = '0123456789';
    let result = '';

    for (let i = 0; i < 4; i += 1) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }

    this.setState({ clockName: result });
  };

  render(): React.ReactNode {
    return (
      <div className="App clock">
        <h1 className="clock__title">React clock</h1>

        <h2 className="clock__block">
          {this.state.clockVisible && <Clock name={this.state.clockName} />}
        </h2>

        <div className="clock__controls">
          <button className="clock__controls__button" type="button" onClick={this.showClock}>Show Clock</button>
          <button className="clock__controls__button" type="button" onClick={this.hideClock}>Hide Clock</button>
        </div>

        <form className="clock__input" id="setNameFromForm">
          <input className="clock__input__in" type="text" value="" id="myinput" placeholder="Clock name" />
          <button className="clock__input__button" type="button" onClick={this.changeName}>Set new Clocks name</button>
        </form>
      </div>
    );
  }
}

export default App;
