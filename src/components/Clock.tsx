import React from 'react';

type Props = {
  name: string;
};

type State = {
  date: Date;
};

export default class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  timerID = 0;

  componentDidMount(): void {
    this.timerID = window.setInterval(() => {
      const today = new Date();

      // eslint-disable-next-line no-console
      console.log(today);

      this.setState({ date: today });
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

        <span className="Clock__time">
          {this.state.date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
