import { Component } from 'react';

type State = {
  today: Date,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      this.setState({ today });
      window.console.info(today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      window.console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        <span>
          {' time is '}
        </span>

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
