import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: Date;
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    time: new Date(),
  };

  timerId: number | null = null;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date() });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      if (prevProps.name !== '') {
        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
      }
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render(): React.ReactNode {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
