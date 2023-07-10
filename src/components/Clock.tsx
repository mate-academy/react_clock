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

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (prevProps.name !== this.props.name) {
      /* eslint-disable-next-line */
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.today !== this.state.today) {
      /* eslint-disable-next-line */
      console.info(this.getUTCFormat(this.state.today));
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  getUTCFormat = (date: Date) => date.toUTCString().slice(-12, -4);

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getUTCFormat(this.state.today)}
        </span>
      </div>
    );
  }
}
