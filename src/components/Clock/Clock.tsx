import React from 'react';

type Props = {
  name: number;
};

type State = {
  time: Date;
};

interface OldName {
  name: number;
}

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: OldName): void {
    // eslint-disable-next-line
    console.log(this.state.time.toLocaleTimeString());
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    return (
      <span>
        {this.state.time.toLocaleTimeString()}
      </span>
    );
  }
}
