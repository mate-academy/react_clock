import React from 'react';

type State = {
  currentDate: Date;
};

type Props = {
  name: number;
};

export class Clock extends React.Component<Props, State> {
  time? : number;

  state: State = {
    currentDate: new Date(),
  };

  componentDidMount() {
    this.time = window.setInterval(() => {
      this.setState({
        currentDate: new Date(),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.currentDate.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ name }: Props) {
    if (name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.currentDate.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}
