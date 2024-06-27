import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: string;
};

export default class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerID = 0;

  componentDidMount(): void {
    this.timerID = window.setInterval(() => {
      const today = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(today);

      this.setState({ today });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerID);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
