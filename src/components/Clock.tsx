import { Component } from 'react';

interface State {
  todaysDate: string,
  timer: number
}

interface Props {
  name: string,
}

function currentDate(): string {
  const value = new Date();

  return value.toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state = {
    todaysDate: currentDate(),
    timer: 0,
  };

  componentDidMount() {
    this.setState({
      timer: window.setInterval(() => {
        this.setState({ todaysDate: currentDate() });
      }, 1000),
    });
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.todaysDate !== this.state.todaysDate) {
      // eslint-disable-next-line no-console
      console.info(this.state.todaysDate);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timer);
  }

  render() {
    const { todaysDate } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {todaysDate}
        </span>
      </div>
    );
  }
}
