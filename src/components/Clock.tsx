import { Component } from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
};

const getFormattedDate = (value: Date) => value.toUTCString().slice(-12, -4);

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      window.console.info(getFormattedDate(this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      window.console.debug(
        `Renamed from ${prevProps.name} to ${name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {getFormattedDate(today)}
        </span>
      </div>
    );
  }
}
