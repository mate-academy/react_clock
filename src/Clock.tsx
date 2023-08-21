import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: string;
};

const formatTime = (date: Date): string => {
  return date.toUTCString().slice(-12, -4);
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: formatTime(new Date()),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newTime = formatTime(new Date());

      // eslint-disable-next-line no-console
      console.info(newTime);
      this.setState({ currentTime: newTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
    // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}
