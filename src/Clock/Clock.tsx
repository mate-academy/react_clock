import React from 'react';

type Props = {
  name: string;
};

type State = {
  now: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    now: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const currentDate = new Date();

      /* eslint-disable no-console */
      console.info(currentDate.toUTCString().slice(-12, -4));
      this.setState({ now: currentDate });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      /* eslint-disable no-console */
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { now: today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
