import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  addIntervalHelper = () => {
    if (!this.clockValueTimerId) {
      this.clockValueTimerId = window.setInterval(() => {
        const initialTime = new Date().toUTCString().slice(-12, -4);

        this.setState({ today: initialTime });
        // eslint-disable-next-line no-console
        console.log(initialTime);
      }, 1000);
    }
  };

  removeIntervalHelper = () => {
    clearInterval(this.clockValueTimerId);

    this.clockValueTimerId = null;
  };

  clockValueTimerId: number | null | undefined;

  componentDidMount(): void {
    this.addIntervalHelper();
  }

  componentWillUnmount(): void {
    this.removeIntervalHelper();
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      const newClockName = this.props.name;
      const oldName = prevProps.name;

      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${oldName} to ${newClockName}`);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
