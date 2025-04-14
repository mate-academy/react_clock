import React from 'react';

interface Props {
  name: string;
}

interface State {
  today: Date;
}

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  state = {
    today: new Date(),
  };

  updateTime = () => {
    this.setState({ today: new Date() });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
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
