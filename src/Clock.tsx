import React from 'react';

interface Props {
  name: string,
}

interface State {
  date: Date,
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(this.handleTimer, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  handleTimer = () => {
    this.setState({ date: new Date() });
    // eslint-disable-next-line no-console
    console.info(this.state.date.toUTCString().slice(-12, -4));
  };

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}
        <span className="Clock__time">
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
