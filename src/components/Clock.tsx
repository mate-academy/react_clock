import { PureComponent } from 'react';

export type Props = {
  hasClock: boolean;
  clockName: string;
};

export class Clock extends PureComponent<Props> {
  state = {
    today: new Date(),
  };

  handleClock = window.setInterval(() => {
    const today = new Date();

    this.setState({ today: new Date() });

    // eslint-disable-next-line no-console
    console.log(today.toUTCString().slice(-12, -4));
  }, 1000);

  componentWillUnmount(): void {
    window.clearInterval(this.handleClock);
  }

  render() {
    const { hasClock, clockName } = this.props;

    return (
      <>
        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>

            {' time is '}

            <span className="Clock__time">
              {this.state.today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </>
    );
  }
}
