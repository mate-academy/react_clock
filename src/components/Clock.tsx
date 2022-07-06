import React from 'react';
import './Clock.scss';

type Props = {
  name: number;
};

export class Clock extends React.Component<Props> {
  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());

      date.toLocaleTimeString();
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <>
        <h1 className="Clock__title">
          {`Clock ${this.props.name}`}
        </h1>
        <p data-cy="time" className="Clock__time">
          {`Current time: ${this.state.time}`}
        </p>
      </>
    );
  }
}
