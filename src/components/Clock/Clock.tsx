import React from 'react';

const getToday = () => new Date().toUTCString().slice(-12, -4);

type State = {
  date: string;
};

export class Clock extends React.Component<{ name: string }, State> {
  state = {
    date: getToday(),
  };

  intervalID = 0;

  componentDidMount(): void {
    this.intervalID = window.setInterval(() => {
      this.setState({ date: getToday() });
      // eslint-disable-next-line no-console
      console.info(getToday());
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<{ name: string; }>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalID);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.date}
        </span>
      </div>
    );
  }
}
