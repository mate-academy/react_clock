import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  everySecondClock = 0;

  componentDidMount() {
    this.everySecondClock = window.setInterval(() => {
      const currentTime = new Date();

      // eslint-disable-next-line no-console
      console.info(currentTime.toUTCString().slice(-12, -4));

      this.setState({ today: currentTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.everySecondClock);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
