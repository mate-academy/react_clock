import React from 'react';

type Props = {
  name: string;
};

type State = {
  now: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    now: new Date(),
  };

  timer?: number;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      const newNow = new Date();

      this.setState({ now: newNow });

      // eslint-disable-next-line no-console
      console.log(newNow.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;
    const { now } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{now.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
