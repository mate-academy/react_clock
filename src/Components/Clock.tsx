import React from 'react';

type State = {
  currentTime: string;
};

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  intervalId: number | null = null;

  state: State = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.intervalId = window.setInterval(() => {
      this.setState({
        currentTime: new Date().toUTCString().slice(-12, -4),
      });

      // eslint-disable-next-line no-console
      console.info(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
