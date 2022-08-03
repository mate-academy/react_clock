import { Component } from 'react';

type State = {
  date:Date;
};

type Props = {
  name: string;
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerDate = 0;

  componentDidMount() {
    this.timerDate = window.setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString('en-EN'));
    }, 1000);
  }

  componentDidUpdate(prevProps:Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from <${prevProps.name}> to <${this.props.name}>`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerDate);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.date.toLocaleTimeString('en-EN')}
        </span>
      </div>
    );
  }
}
