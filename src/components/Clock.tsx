import React from 'react';

type Props = {
  name: string;
  updateClockName: () => void;
};

export class Clock extends React.Component<Props> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  clockNameId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);

    this.clockNameId = window.setInterval(() => {
      this.props.updateClockName();
    }, 3000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.clockNameId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">{this.props.name}</strong>

          {' time is '}

          <span className="Clock__time">
            {this.state.today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
