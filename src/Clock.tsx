import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: Date;
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    time: new Date(),
  };

  timerId = 0;

  changeTime = () => {
    const now = new Date();

    this.setState({ time: now });

    // eslint-disable-next-line no-console
    console.log(now.toUTCString().slice(-12, -4));
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(this.changeTime, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
