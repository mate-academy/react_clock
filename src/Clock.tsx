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

  componentDidMount() {
    setInterval(() => {
      this.state.time.toLocaleTimeString();
      this.setState({ time: new Date() });
    }, 1000);
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
            {// eslint-disable-next-line no-console
              console.log(time.toLocaleTimeString())
            }
          </p>
        </div>
      </>
    );
  }
}

export default Clock;
