// import { App } from '../App';
import React from 'react';

interface Props {
  name: string;
}

interface State {
  currentTime: string;
}

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  time = 0;

  componentDidMount() {
    this.time = window.setInterval(() => {
      const now = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime: now });
      // eslint-disable-next-line no-console
      console.log(now);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.time);
  }

  render() {
    const { name } = this.props;
    const { currentTime: time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
