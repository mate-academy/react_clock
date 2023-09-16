import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

function formatDate(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends React.PureComponent<Props, State> {
  timerId = 0;

  state = {
    today: new Date(),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(formatDate(this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
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
          {formatDate(today)}
        </span>
      </div>
    );
  }
}
