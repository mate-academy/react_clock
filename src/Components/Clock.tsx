import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: string;
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  todayTimerId = 0;

  componentDidMount(): void {
    this.todayTimerId = window.setInterval(() => {
      const time = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime: time });

      // eslint-disable-next-line no-console
      console.log(time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      const value = `Renamed from ${prevProps.name} to ${this.props.name}`;

      // eslint-disable-next-line no-console
      console.warn(value);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.todayTimerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}
