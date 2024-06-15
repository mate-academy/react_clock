import React from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId2 = 0;

  componentDidMount(): void {
    this.timerId2 = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(): void {
    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId2);
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
