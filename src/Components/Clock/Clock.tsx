import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.PureComponent<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  time = this.state.today.toUTCString().slice(-12, -4);

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });
      // eslint-disable-next-line
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
