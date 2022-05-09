import React from 'react';

type State = {
  x: string,
};

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    x: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: string = new Date().toLocaleTimeString();

      this.setState({ x: date });

      // eslint-disable-next-line
      console.log(this.state.x);
    }, 1000);
  }

  componentDidUpdate(oldName: Props) {
    if (oldName.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="app__clock clock">
        <div>
          Name:
          {' '}
          {this.props.name}
        </div>
        <div
          className="clock__time"
          data-cy="time"
        >
          {this.state.x}
        </div>
      </div>
    );
  }
}
