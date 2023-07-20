import React from 'react';

type Props = {
  name: string,
};

export class Clock extends React.Component<Props> {
  state = {
    clockTime: new Date(),
  };

  clockTimerId = 0;

  componentDidMount(): void {
    this.clockTimerId = window.setInterval(() => {
      this.setState({ clockTime: new Date() });
      // eslint-disable-next-line
      console.info(this.state.clockTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockTimerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.clockTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
