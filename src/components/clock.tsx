import React from 'react';

interface State {
  time: string,
}

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(
      () => {
        this.setState({ time: new Date().toUTCString().slice(-12, -4) });

        // eslint-disable-next-line no-console
        console.info(this.state.time);
      }, 1000,
    );
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
  ): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div
        className="Clock"
        aria-hidden="true"
      >
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}
        <span className="Clock__time">
          {this.state.time}
        </span>
      </div>
    );
  }
}
