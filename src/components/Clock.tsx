import React from 'react';

type Props = {
  name: string,
};

type State = {
  today: Date,
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(this.clock, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  clock = () => {
    this.setState({ today: new Date() });
    // eslint-disable-next-line
    console.info(this.state.today.toUTCString().slice(-12, -4));
  };

  render() {
    const timeToRender = this.state.today.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {timeToRender}
        </span>
      </div>
    );
  }
}
