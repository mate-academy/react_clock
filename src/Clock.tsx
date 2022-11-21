import { Component } from 'react';
import './App.scss';

type Props = {
  clockname: string,
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
      const { date } = this.state;

      // eslint-disable-next-line no-console
      console.info(date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(previousProps: Props) {
    const { clockname } = this.props;

    if (previousProps.clockname !== clockname) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${previousProps.clockname} to ${clockname}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;

    const formattedDate = date.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockname}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formattedDate}
        </span>
      </div>
    );
  }
}
