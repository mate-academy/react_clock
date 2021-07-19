import React from 'react';
import Button from '../Button/Button';
import Time from '../Time/Time';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
    isVisible: true,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.isVisible) {
        this.setState({ date: new Date().toLocaleTimeString() });
        // eslint-disable-next-line
        console.log(this.state.date);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const hide = () => {
      this.setState({ isVisible: false });
    };

    const show = () => {
      this.setState({ isVisible: true });
    };

    return (
      <>
        {this.state.isVisible ? (
          <p
            className="App__current-time"
          >
            {`Current time: ${this.state.date}`}
          </p>
        )
          : (<p className="destroyed">Time was stopped</p>) }
        <Time isVisible={this.state.isVisible} />
        <Button hide={hide} show={show} />
      </>
    );
  }
}
