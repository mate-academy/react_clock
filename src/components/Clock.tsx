import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  newDate: Date;
};

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  state = {
    newDate: new Date(),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ newDate: new Date() });
    }, 1000);
  }

  componentDidUpdate(): void {
    // eslint-disable-next-line no-console
    console.log(this.state.newDate.toUTCString().slice(-12, -4));
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { newDate } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {newDate.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
