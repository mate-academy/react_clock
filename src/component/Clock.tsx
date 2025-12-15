import React from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
  newName: (newName: string) => void;
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevProps.name !== this.props.name) {
      this.props.newName(this.props.name);
    }

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
