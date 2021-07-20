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
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${this.state.name} to ${randomName}`);
    }
  };

  hide = () => {
    this.setState({ isVisible: false });
  };

  show = () => {
    this.setState({ isVisible: true });
  };

  render() {
    return (
      <div className="App">
        {this.state.isVisible ? (

          <Clock isVisible={this.state.isVisible} />
        )
          : (<p className="destroyed">Time was stopped</p>) }
        <Button
          hide={this.hide}
          show={this.show}
          changeName={this.changeName}
        />
      </div>
    );
  }
}

export default App;
