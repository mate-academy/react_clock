import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  timerId: number | null = null;

  state = {
    currentTime: '',
  };

  componentDidMount() {
    const updateTime = () => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({
        currentTime: newTime,
      });

      // eslint-disable-next-line no-console
      console.log(newTime);
    };

    // Set initial time without logging
    const initialTime = new Date().toUTCString().slice(-12, -4);

    this.setState({
      currentTime: initialTime,
    });

    this.timerId = window.setInterval(updateTime, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
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
