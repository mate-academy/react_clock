import { Component } from 'react';

type Props = {
  name: string;
};

export class Clock extends Component<Props, {}> {
  timerId = 0;

  state = {
    today: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        <span> time is </span>
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
