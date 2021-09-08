import React from 'react';
import './Clock.scss';

interface Props {
  name: number;
}

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timer = setInterval(() => {
    this.setState({ time: new Date() });
    // eslint-disable-next-line no-console
    console.log(this.state.time.toLocaleTimeString());
  }, 1000);

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <>
        <div className="Clock">
          <h2 className="Clock__name">
            {name}
          </h2>
          <p className="Clock__time">
            {`Current time: ${time.toLocaleTimeString()}`}
          </p>
        </div>
      </>
    );
  }
}
