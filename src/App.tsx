import React from 'react';
import './App.scss';
import Clock from './Clock';

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName: number;
};
class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  hideHandler = () => {
    this.setState({ isClockVisible: false });
  };

  showHandler = () => {
    this.setState({ isClockVisible: true });
  };

  nameHandler = () => {
    this.setState({ clockName: Math.floor((Math.random() * 10) + 1) });
  };

  render() {
    return (
      <div className="App">
        {/* <img className="bgImage" src="https://jabko.ua/image/catalog/products/2020/06/281404/3581%20(1).jpg" alt="applewatch" /> */}
        <div className="container">
          <div
            className="clockButton"
            onClick={this.showHandler}
            onKeyDown={this.showHandler}
            role="button"
            tabIndex={0}
          >
            Show Clock
          </div>
          <div
            className="clockButton"
            onClick={this.hideHandler}
            onKeyDown={this.hideHandler}
            role="button"
            tabIndex={0}
          >
            Hide Clock
          </div>
          <div
            className="clockButton"
            onClick={this.nameHandler}
            onKeyDown={this.nameHandler}
            role="button"
            tabIndex={0}
          >
            Random name
          </div>
          { this.state.isClockVisible && <Clock name={this.state.clockName} /> }
        </div>
      </div>
    );
  }
}

export default App;
