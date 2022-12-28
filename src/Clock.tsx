import React from 'react';

type State = {
  today: Date,
};

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      // eslint-disable-next-line
      console.info(today.toUTCString().slice(-12, -4));
      this.setState({ today });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
