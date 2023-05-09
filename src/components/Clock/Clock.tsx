import React from 'react';

interface State {
  idea: string;
}

export class Clock extends React.Component<{}, State> {
  state: Readonly<State> = {
    idea: 'abc',
  };

  render() {
    return <p>{`abc ${this.state.idea}`}</p>;
  }
}
