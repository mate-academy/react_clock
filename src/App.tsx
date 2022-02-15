import React from 'react';
import Clock from './Components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isVisible: true,
    name: 'Rolex',
  };

  showClocks = () => {
    // eslint-disable-next-line no-console
    console.log('showClocks');
    this.setState({ isVisible: true });
  };

  hideClocks = () => {
    // eslint-disable-next-line no-console
    console.log('hideClocks');
    this.setState({ isVisible: false });
  };

  ClockName = () => {
    const arr = ['Seiko', 'Rolex', 'CASIO', 'Bell & Ross', 'Omega', 'Patek Philippe'];

    this.setState({ name: arr[Math.floor(Math.random() * 6)] });

    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed to ${this.state.name}`);
  };

  render(): React.ReactNode {
    return (
      <div className="app">
        <h1 className="app__title">React clock</h1>
        <button className="app__button-show" type="button" onClick={this.showClocks}>
          Show Clock
        </button>
        <button className="app__button-hide" type="button" onClick={this.hideClocks}>
          Hide Clock
        </button>

        <div className="app__clock clock">
          { this.state.isVisible && <Clock /> }
        </div>

        <p className="clock__name">{this.state.name}</p>
        <button className="clock__button-name" type="button" onClick={this.ClockName}>
          If u wanna
          <br />
          a new clock
          <br />
          just tap it
        </button>
        <p className="clock__motto">Невозможно остановить время: этого не допустит часовая промышленность. </p>
        <p className="clock__motto-author">(c) Станислав Ежи Лец</p>
      </div>
    );
  }
}

export default App;
