import React from 'react';

type State = {
  today: string;
};
type Props = {
  name: string;
};
export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId1 = 0;

  timerId2 = 0;

  componentDidMount(): void {
    this.timerId2 = window.setInterval(() => {
      const today = new Date().toUTCString().slice(-12, -4);

      this.setState({ today });
      // eslint-disable-next-line no-console
      console.log(today);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId2);
  }

  render() {
    return (
      <div className="App">
        <div className="Clock">
          <strong className="Clock__name">{this.props.name}</strong>
          {' time is '}
          <span className="Clock__time">{this.state.today}</span>
        </div>
      </div>
    );
  }
}
