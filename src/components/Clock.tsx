import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  date: Date,
};

function formatDate(date: Date) {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (prevState.date !== this.state.date) {
      window.console.info(formatDate(this.state.date));
    }

    if (prevProps.name !== this.props.name) {
      window.console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formatDate(this.state.date)}
        </span>
      </div>
    );
  }
}
