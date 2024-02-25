import React from 'react';

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props> {
  state = {
    today: new Date(),
  };

  clockId = 0;

  componentDidMount(): void {
    this.clockId = window.setInterval(() => {
      this.setState({ today: new Date() });

      if (this.props.hasClock) {
        // eslint-disable-next-line no-console
        console.log(new Date().toUTCString().slice(-12, -4));
      }
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockId);
  }

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
