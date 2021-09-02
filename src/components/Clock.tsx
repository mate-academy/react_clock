import React from 'react';
import '../App.scss';
import './Clock.scss';

interface Props {
  clockName: string;
}

type State = {
  time: Date;
};

class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timer = setInterval(() => {
    this.setTime();
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentDidUpdate(prevProp: Props) {
    const { clockName: oldName } = prevProp;
    const { clockName: newName } = this.props;

    if (oldName !== newName) {
      // eslint-disable-next-line no-lone-blocks
      { // eslint-disable-next-line no-console
        console.log(`The Clock was renamed from ${oldName} to ${newName}`);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setTime = () => {
    this.setState({
      time: new Date(),
    });
  };

  render() {
    const { clockName } = this.props;
    const { time } = this.state;

    return (
      <>
        <h2 className="clock__title">{clockName}</h2>
        <p className="clock__content">
          Current time:
          {' '}
          {time.toLocaleTimeString()}
          {// eslint-disable-next-line no-console
            console.log(time.toLocaleTimeString())
          }
        </p>
      </>
    );
  }
}

export default Clock;
