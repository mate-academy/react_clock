import React from 'react';

interface Props {
  clockName: string
}

interface State {
  today: Date
}

export class Clock extends React.PureComponent<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
  ): void | boolean {
    return prevProps.clockName !== this.props.clockName
    // eslint-disable-next-line no-console
    && console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (

      <div className="App">

        <div className="Clock">
          <strong className="Clock__name">
            {this.props.clockName}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {this.state.today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
