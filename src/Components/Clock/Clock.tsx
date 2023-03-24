import { Component, ReactNode } from 'react';

type State = {
  today: Date,
};

type Props = {
  clockName: string,
};
export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  clockId: number | null = null;

  componentDidMount() {
    this.clockId = window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      console.info(this.formatDateToUTC(this.state.today));
    }, 1000);
  }

  componentWillUnmount() {
    const { clockId } = this;

    if (clockId !== null) {
      window.clearInterval(clockId);

      this.clockId = null;
    }
  }

  formatDateToUTC = (date: Date) => date.toUTCString().slice(-12, -4);

  render(): ReactNode {
    const { formatDateToUTC } = this;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formatDateToUTC(this.state.today)}
        </span>
      </div>
    );
  }
}
