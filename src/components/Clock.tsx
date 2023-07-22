import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  secondsTimerId = 0;

  componentDidMount(): void {
    this.secondsTimerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });

      // eslint-disable-next-line
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.secondsTimerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
