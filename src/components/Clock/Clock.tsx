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
      console.info(date.toUTCString().slice(-12, -4));
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
          {date.toUTCString().slice(-12, -4)}
        </span>
      </>
    );
  }
}
