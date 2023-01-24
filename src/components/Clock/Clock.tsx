import { Component } from 'react';

type Props = {
  name:string,
};

export class Clock extends Component<Props, {}> {
  state = {
    date: new Date(),
  };

  timerIdEverySecond = 0;

  componentDidMount() {
    this.timerIdEverySecond = window.setInterval(() => {
      const date = new Date();

      this.setState({ date });
      // eslint-disable-next-line no-console
      console.info(this.timeStyle(date));
    }, 1000);
  }

  componentDidUpdate(prevProp:Props) {
    const { name } = this.props;

    if (name !== prevProp.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProp.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdEverySecond);
  }

  timeStyle = (time:Date) => time.toUTCString().slice(-12, -4);

  render() {
    const {
      date,
    } = this.state;

    const {
      name,
    } = this.props;

    return (
      <>
        <strong className="Clock__name">
          {name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {this.timeStyle(date)}
        </span>
      </>
    );
  }
}
