import React from 'react';
import './Clock.scss';

interface Props {
  clockName: string;
}

interface State {
  isMounted: boolean;
  changeTimeTimerId: number;
  clockName: string;
  time: string;
}

const getPreparedTime = (date: Date) => date.toUTCString().slice(-12, -4);

export class Clock extends React.PureComponent<Props> {
  state: State = {
    isMounted: false,
    changeTimeTimerId: 0,
    clockName: this.props.clockName,
    time: getPreparedTime(new Date()),
  };

  componentDidMount() {
    this.setState({ isMounted: true });

    const newTimeTimerId = window.setInterval(() => {
      if (this.state.isMounted) {
        const newTime = new Date().toUTCString().slice(-12, -4);

        this.setState({
          time: newTime,
        });

        // eslint-disable-next-line no-console
        console.log(newTime);
      }
    }, 1000);

    this.setState({
      changeTimeTimerId: newTimeTimerId,
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.changeTimeTimerId);

    this.setState({ isMounted: false });
  }

  componentDidUpdate() {
    const { clockName: oldName, isMounted } = this.state;
    const { clockName: newName } = this.props;

    if (oldName !== newName && isMounted) {
      this.setState({ clockName: newName });
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${oldName} to ${newName}`);
    }
  }

  render() {
    const { time, clockName } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
