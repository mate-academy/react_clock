import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  updateDate = () => {
    this.setState({ today: new Date() });
  };

  componentDidMount() {
    this.timerId = window.setInterval(this.updateDate, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Clock">
          <strong className="Clock__name">{this.props.name}</strong>
          {' time is '}
          <span className="Clock__time">
            {this.state.today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
