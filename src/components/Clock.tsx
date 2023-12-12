import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  state = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timer = 0;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime: newTime });

      // eslint-disable-next-line no-console
      console.info(newTime);
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.currentTime}
        </span>
      </div>
    );
  }
}
