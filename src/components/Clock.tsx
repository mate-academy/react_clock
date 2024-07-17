import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerID = 0;

  componentDidMount(): void {
    this.timerID = window.setInterval(() => {
      const time = new Date().toUTCString().slice(-12, -4);

      this.setState({ today: time });
      // eslint-disable-next-line no-console
      console.log(time);
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
