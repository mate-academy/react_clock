import React from 'react';
import classNames from 'classnames';
import './App.scss';

import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isVisible: true,
  }
  showClock = () => {
    this.setState({isVisible: true})
  }
  hideClock = () => {
    this.setState({isVisible: false})
  }

  render() {
    return (
      <div className="App">
        <p className={classNames( 'Clock', {visible: this.state.isVisible === true}, {invisible: this.state.isVisible === false}, )}>
          {<Clock />}
        </p>
        <button type="button" onClick={this.showClock}>show</button>
        <button type="button" onClick={this.hideClock}>hide</button>
      </div>
    );
  }
};

export default App;
