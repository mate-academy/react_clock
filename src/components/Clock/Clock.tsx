import React from 'react';
import './Clock.scss';

type Props = {
  name: number,
};

type State = {
  date: string,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentDidUpdate(prevName: Props) {
    const newName = this.props;

    if (newName !== prevName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevName.name} to ${newName.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date().toLocaleTimeString(),
    });

    // eslint-disable-next-line no-console
    console.log(this.state.date);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <h1 className="Clock__name">
          Hello!
          <br />
          {' '}
          <br />
          {`I am a clock. My name is #${name}`}
        </h1>

        <div data-cy="time" className="Clock__time">
          {date}
        </div>
      </div>
    );
  }
}
