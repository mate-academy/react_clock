import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  time: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    time: new Date(),
  };

  intervalId = setInterval(() => {});

  componentDidMount() {
    this.intervalId = setInterval(this.handleUpdateTime, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getFormattedDate = (date: Date): string => {
    return date.toUTCString().slice(-12, -4);
  };

  handleUpdateTime = () => {
    this.setState({
      time: new Date(),
    });

    // eslint-disable-next-line no-console
    console.info(this.getFormattedDate(this.state.time));
  };

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getFormattedDate(time)}
        </span>
      </div>
    );
  }
}
