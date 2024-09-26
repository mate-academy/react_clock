import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      this.setState({ today });

      if (this.state.today !== today) {
        // eslint-disable-next-line no-console
        console.log(today.toUTCString().slice(-12, -4));
      }
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
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
