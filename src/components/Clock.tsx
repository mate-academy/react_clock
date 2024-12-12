import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(_: Props, prevState: State) {
    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }
  }

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {new Date().toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
