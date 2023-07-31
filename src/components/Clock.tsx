/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string
};

export class Clock extends React.Component<Props> {
  state = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        currentTime: new Date(),
      });
      console.info(this.state.currentTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
  ) {
    if (prevProps !== this.props) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
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
          {this.state.currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
