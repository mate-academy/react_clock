import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  date: Date;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerUpdateDate = 0;

  componentDidMount() {
    this.timerUpdateDate = window.setInterval(() => {
      const date = new Date();

      this.setState({ date });
      // eslint-disable-next-line
      console.info(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const currentName = this.props.name;
    const prevName = prevProps.name;

    if (currentName !== prevName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevName} to ${currentName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerUpdateDate);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
