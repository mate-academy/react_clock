import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timerId: number | null = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime: newTime });
      // eslint-disable-next-line no-console
      console.log(newTime);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { name: prevName } = prevProps;
    const { name: newName } = this.props;

    if (prevName !== newName) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevName} to ${newName}`);
    }
  }

  render() {
    const { currentTime } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
