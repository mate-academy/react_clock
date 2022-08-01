import { Component } from 'react';

type Props = {
  name:string,
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  timerID?: NodeJS.Timer;

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date(),
      });
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps:Props) {
    if (prevProps.name !== this.props.name) {
    // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
