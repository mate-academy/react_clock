import React from 'react';
import './Clock.scss';

interface Props {
  name: number,
}

type State = {
  time: Date;
};

class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  setInterval = setInterval(() => {
    this.state.time.toLocaleTimeString();
    // eslint-disable-next-line no-console
    console.log(this.state.time.toLocaleTimeString());
    this.setState({ time: new Date() });
  }, 1000);

  componentDidMount() {
    return this.setInterval;
  }

  componentWillUnmount() {
    clearInterval(this.setInterval);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <>
        <div className="Clock">
          <h2>
            Name:&nbsp;
            {name}
          </h2>
          <p>
            Current time:
            {' '}
            {time.toLocaleTimeString()}
          </p>
        </div>
      </>
    );
  }
}

export default Clock;
