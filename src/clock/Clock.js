import React from 'react';
import { ClockShape } from '../shapes/ClockShape';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date(),
      });
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { name, isVisible } = this.props;
    const time = this.state.date.toLocaleTimeString();

    return (
      <div className="clock">
        {
          isVisible
            ? <p className="clock__face">{`${time}`}</p>
            : <p className="clock__face">Time to Coffee</p>
        }
        <p className="clock__name">
          {`Clock Name : ${name}`}
        </p>
      </div>
    );
  }
}

Clock.propTypes = ClockShape;
