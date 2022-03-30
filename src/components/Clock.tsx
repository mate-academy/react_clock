import React from 'react';

type Props = {
  name: number,
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleDateString(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: string = new Date().toLocaleTimeString();

      this.setState({
        time: date,
      });
      // eslint-disable-next-line no-console
      console.log(`New time: ${this.state.time}`);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = prevProps;

    if (name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <>
        <h3>
          {`Clock name: ${this.props.name}`}
        </h3>
        <h3>
          {`Current time: ${this.state.time}`}
        </h3>
      </>
    );
  }
}
