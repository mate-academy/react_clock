import React from 'react';
import './App.scss';
import ButtonHideTime from './Components/ButtonHideTime/ButtonHideTime';
import ButtonShowTime from './Components/ButtonShowTime/ButtonShowTime';
import ButtonChangeName from './Components/ButtonChangeName/ButtonChangeName';

import { Clock } from './Components/Clock/Clock';

class App extends React.Component {
  state = {
    name: 0,
    isVisible: true,
  };

  changeName = () => {
    if (this.state.isVisible) {
      const randomName = (Math.random() * 100000).toFixed(0);

      this.setState({ name: randomName });
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${this.state.name} to ${randomName}`);
    }
  };

  hideTime = () => {
    this.setState({ isVisible: false });
  };

  showTime = () => {
    this.setState({ isVisible: true });
  };

  render() {
    return (
      <div className="App">
        {this.state.isVisible ? (

          <Clock />
        )
          : (<p className="destroyed">Time was stopped</p>) }
        <div className="App__container-button">
          <ButtonHideTime show={this.showTime} />
          <ButtonShowTime hide={this.hideTime} />
          <ButtonChangeName changeName={this.changeName} />
        </div>
      </div>
    );
  }
}

export default App;
