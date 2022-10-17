import { Component } from 'react';

type Props = {
  name: string,
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
      // eslint-disable-next-line no-console
      console.info(this.state.date.toUTCString().slice(-12, -4));
      const date = new Date();

      this.setState({ date });
    }, 1000);
  }

  componentDidUpdate(oldName: Props) {
    if (oldName.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
