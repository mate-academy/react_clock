import { PureComponent, ReactNode } from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
  nameTimerId: number;
};
export class Clock extends PureComponent<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.props.nameTimerId);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): void {
    if (prevState.today !== this.state.today) {
    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));
    }
  }

  render(): ReactNode {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
