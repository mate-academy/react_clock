import { PureComponent } from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
  initialized: boolean;
};

export class Clock extends PureComponent<Props, State> {
  state: State = {
    today: new Date(),
    initialized: false,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      this.setState({ today, initialized: true }, () => {
        if (this.state.initialized) {
          // eslint-disable-next-line no-console
          console.log(today.toUTCString().slice(-12, -4));
        }
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
