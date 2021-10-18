import React from 'react';

type Props = {
  name: number
};

type State = {
  time: Date
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  updateTimeScheduler: NodeJS.Timeout | undefined;

  componentDidMount() {
    this.updateTimeScheduler = setInterval(
      () => {
        this.setState({ time: new Date() });

        // eslint-disable-next-line no-console
        console.log(this.state.time.toLocaleTimeString());
      },
      1000,
    );
  }

  componentDidUpdate(prevProps: { name: number; }) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.updateTimeScheduler !== undefined) {
      clearInterval(this.updateTimeScheduler);
    }
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <>
        {time.toLocaleTimeString()}
        {(name !== -1) && ` (${name})`}
      </>
    );
  }
}
