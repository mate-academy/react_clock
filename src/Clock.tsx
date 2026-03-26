import React from 'react';
import './App.scss';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: '',
  };

  timerId!: ReturnType<typeof setInterval>;

  componentDidMount() {
    const time = new Date().toUTCString().slice(-12, -4);

    this.setState({ time });

    this.timerId = setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: newTime }, () => {
        // eslint-disable-next-line no-console
        console.log(newTime);
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
