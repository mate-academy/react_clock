import { Component } from 'react';

type Props = {
  clockName: string,
};

export class Clock extends Component<Props> {
  state = {
    today: new Date(),
  };

  timeTimerId = 0;

  componentDidMount() {
    this.timeTimerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      const { today } = this.state;

      // eslint-disable-next-line no-console
      console.info(today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const oldName = prevProps.clockName;
    const newName = this.props.clockName;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeTimerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
