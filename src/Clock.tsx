import React from 'react';

type Props = {
  clockName: string
};

type State = {
  nowDate: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    nowDate: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newValue = new Date();

      // eslint-disable-next-line no-console
      console.info(newValue.toUTCString().slice(-12, -4));

      this.setState({ nowDate: newValue });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { nowDate } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {nowDate.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
