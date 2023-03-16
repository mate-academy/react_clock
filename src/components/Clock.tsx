import React from 'react';

interface Props {
  name: string;
}

type State = {
  today: Date;
};

function correctTime(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ today: new Date() });
      window.console.info(correctTime(this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      window.console.debug(
        `Renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {correctTime(today)}
        </span>
      </div>
    );
  }
}
