import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  now: Date;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    now: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const updatedDate = new Date();

      // eslint-disable-next-line no-console
      console.info(this.state.now.toLocaleTimeString());

      this.setState({ now: updatedDate });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.now.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
