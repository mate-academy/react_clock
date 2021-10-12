import React from 'react';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    isClockVisible: true,
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    const { isClockVisible, date } = this.state;

    if (isClockVisible) {
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }

    return (
      <div className="Clock">
        <div className="Clock-Title">Current time:</div>
        <div className="Clock-Time">
          {isClockVisible && date.toLocaleTimeString()}
        </div>
        <div className="Clock-Buttons">
          <button
            className="Clock-Button"
            type="button"
            onClick={() => this.setState({ isClockVisible: true })}
          >
            Show
          </button>
          <button
            className="Clock-Button"
            type="button"
            onClick={() => this.setState({ isClockVisible: false })}
          >
            Hide
          </button>
        </div>
      </div>
    );
  }
}
