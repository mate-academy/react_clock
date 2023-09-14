import React from 'react';

type Props = {
  clockName: string
};

type State = {
  today: Date,
};

function normalizeDate(today: Date) {
  return today.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timer = 0;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      console.info(normalizeDate(this.state.today));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {normalizeDate(this.state.today)}
        </span>
      </div>
    );
  }
}
