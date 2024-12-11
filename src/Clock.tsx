import React from 'react';

type Props = {
  name: string;
};

type State = {
  now: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    now: new Date(),
  };

  timeId: number = 0;

  componentDidMount(): void {
    this.timeId = window.setInterval(() => {
      this.setState({ now: new Date() }, () => {
        // eslint-disable-next-line no-console
        console.log(this.state.now.toUTCString().slice(-12, -4));
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timeId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.now.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
