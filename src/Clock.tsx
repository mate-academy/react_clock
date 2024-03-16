/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.PureComponent<Props> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: Readonly<{}>): void {
    const { name } = prevProps;

    if (prevState !== this.state) {
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }

    if (prevProps !== this.props) {
      console.debug(`Renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
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
