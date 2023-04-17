import React from 'react';

function getCuerrentDate(): string {
  const date = new Date();

  return date.toUTCString().slice(-12, -4);
}

type Props = {
  name: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: getCuerrentDate(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: getCuerrentDate() });

      console.info(`${this.state.today}`); // eslint-disable-line
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const prevName = prevProps.name;
    const currName = this.props.name;

    if (prevName !== currName) {
      console.debug(`Renamed from ${prevName} to ${currName}`); // eslint-disable-line
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
