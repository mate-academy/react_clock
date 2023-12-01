import { Component } from 'react'; // react component
import { ClockState, ClockProps } from './types'; // types

export class Clock extends Component<ClockProps, ClockState> {
  state = {
    clockId: undefined,
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.setState({
      clockId: window.setInterval(() => {
        const currentDate = new Date();
        const currentTime = currentDate.toUTCString().slice(-12, -4);

        this.setState({ time: currentTime });

        // eslint-disable-next-line no-console
        console.info(currentTime);
      }, 1000),
    });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.clockId);
    window.clearInterval(this.props.intervalId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
