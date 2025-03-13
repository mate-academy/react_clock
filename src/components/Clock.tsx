import React from 'react';

interface State {
  currentTime: Date;
}

interface Props {
  name: string;
}

export class Clock extends React.Component<Props, State> {
  secondTimerId: number | undefined;

  state: State = {
    currentTime: new Date(),
  };

  componentDidMount(): void {
    this.secondTimerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime);

      this.setState({
        currentTime: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.secondTimerId);
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
