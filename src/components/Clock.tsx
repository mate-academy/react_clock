import React from 'react';

type Props = {
  clockName: number;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props> {
  state: State = {
    date: new Date(),
  };

  watch = setInterval(() => {
    this.setState({ date: new Date() });
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
  }, 1000);

  update = setInterval(() => {
    this.setState({ date: new Date() });
  }, 1000);

  render() {
    return (
      <>
        <p>
          {`Current time: ${this.state.date.toLocaleTimeString()}`}
        </p>
      </>
    );
  }
}
