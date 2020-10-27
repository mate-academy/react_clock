import React, { Component } from 'react';
import './App.scss';
import Clock from './Clock/Clock';

class App extends Component {
  state = {
    title: 'React Clock',
    isClockVisible: false,
  };

  showClockHandler = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  hideClockHandler = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  changeTitleHandler = () => {
    const oldClockTitle = this.state.title;
    const newClockTitle = `React Clock #${Math.ceil(Math.random() * 100)}`;

    this.setState({
      title: newClockTitle,
    });
    // eslint-disable-next-line
    console.log(`the Clock was renamed from ${oldClockTitle} to ${newClockTitle}`);
  }

  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        {this.state.isClockVisible && <Clock />}
        <button
          onClick={this.showClockHandler}
          type="button"
          className="btn btn-outline-success"
        >
          Show Clock
        </button>
        <button
          onClick={this.hideClockHandler}
          type="button"
          className="btn btn-outline-danger"
        >
          Hide Clock
        </button>
        <button
          onClick={this.changeTitleHandler}
          type="button"
          className="btn btn-outline-primary"
        >
          Set random name
        </button>
      </>
    );
  }
}

export default App;
