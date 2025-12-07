import React from 'react';

type State = {
  currentTime: string;
};

type Props = {
  name: string;
  timerId?: number | undefined;
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState(
        { currentTime: new Date().toUTCString().slice(-12, -4) },
        // eslint-disable-next-line no-console
        () => console.log(this.state.currentTime),
      );
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
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
