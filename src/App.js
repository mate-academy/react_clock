import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';
import { Button } from './components/Button';

class App extends React.Component {
  state = {
    name: 0,
    isVisible: false,
  }

  showClock = () => {
    this.setState({ isVisible: true });
  }

  hideClock = () => {
    this.setState({ isVisible: false });
  }

  changeName = () => {
    if (this.state.isVisible) {
      const name = +(Math.random() * 100000).toFixed(0);

      this.setState({ name });
    }
  }

  render() {
    return (
      <div className="Clock">
        {this.state.isVisible ? (
          <Clock clockName={this.state.name} />
        ) : (
          <p className="Clock__message">The clock is hide</p>
        )}
        <div className="Clock__wrap">
          <Button onClick={this.showClock} name="Show Clock" />
          <Button onClick={this.hideClock} name="Hide Clock" />
          <Button onClick={this.changeName} name="Change Name" />
        </div>
      </div>
    );
  }
}

export default App;
