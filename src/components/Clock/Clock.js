import React from 'react';
import { ClockShape } from '../shapes/ClockShape';

export class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  componentDidMount() {
    setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
      this.setState({ time: date });
    }, 1000);
  }

  render() {
    const { isVisible } = this.props;

    if (isVisible) {
      return (
        <span>
          {this.state.time.toLocaleTimeString()}
        </span>
      );
    }

    return <span>Empty</span>;
  }
}

Clock.propTypes = ClockShape;
