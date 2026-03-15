import './Clock.scss';
import React from 'react';

function getFormattedDate(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

interface Props {
  name: string;
}

interface State {
  currentTime: string;
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    currentTime: getFormattedDate(new Date()),
  };

  tickTimerId = 0;

  componentDidMount() {
    this.tickTimerId = window.setInterval(() => {
      const newDate = getFormattedDate(new Date());

      this.setState({ currentTime: newDate });

      // eslint-disable-next-line no-console
      console.log(newDate);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name === this.props.name) {
      return;
    }

    // eslint-disable-next-line no-console
    console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
  }

  componentWillUnmount() {
    window.clearInterval(this.tickTimerId);
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
