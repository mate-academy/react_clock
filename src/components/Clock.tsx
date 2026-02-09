import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  private timeInterval?: number;

  state: Readonly<State> = {
    today: new Date(),
  };

  componentDidMount() {
    this.setState({ today: new Date() });

    this.timeInterval = window.setInterval(() => {
      const next = new Date();

      this.setState({ today: next });

      // eslint-disable-next-line no-console
      console.log(next.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timeInterval) {
      window.clearInterval(this.timeInterval);
      this.timeInterval = undefined;
    }
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
