import { Component, ReactNode } from 'react';

type Props = {
  clockName: string,
};

type State = {
  today: Date,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      console.info(this.state.today.toLocaleTimeString()); // eslint-disable-line
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const { clockName: oldName } = prevProps;
    const { clockName: newName } = this.props;

    if (this.props.clockName !== prevProps.clockName) {
      console.debug(`Renamed from ${oldName} to ${newName}`); // eslint-disable-line
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render(): ReactNode {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
