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
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    const { clockId } = this;

    if (clockId !== null) {
      window.clearInterval(clockId);

      this.clockId = null;
    }
  }

  render(): ReactNode {
    const currentTime = this.state.today.toUTCString().slice(-12, -4);
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
