import React from 'react';
import './App.scss';
import Button from './Components/Button/Button';

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

          <Clock clockName={this.state.name} />
        )
          : (<p className="destroyed">Time was stopped</p>) }
        <div className="App__container-button">
          <Button
            name="Show time"
            callback={this.showTime}
          />
          <Button
            name="Hide time"
            callback={this.hideTime}
          />
          <Button
            name="Change Name"
            callback={this.changeName}
          />
        </div>
      </div>
    );
  }
}

export default App;
