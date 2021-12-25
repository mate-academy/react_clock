import React from 'react';
import './Clock.scss';

type State = {
  time: Date;
};

type Props = {
  name: number;
};

export class Clock extends React.Component<Props, State> {
  timerId: NodeJS.Timer = setInterval(() => { }, 0);

  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date(),
      });

      // eslint-disable-next-line
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <>
        <p className="text">
          Current time:
          {' '}
          <span className="textContent">{time.toLocaleTimeString()}</span>
          <br />
          {' '}
          {name ? `Name is ${name}` : ''}
        </p>
      </>
    );
  }
}
