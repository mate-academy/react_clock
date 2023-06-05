import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  date: Date,
};

// eslint-disable-next-line react/prefer-stateless-function
export class Clock extends Component<Props, {}> {
  state: Readonly<State> = {
    date: new Date(),
  };

  private timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name === this.props.name) {
      return;
    }

    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
