import React from 'react';

type State = {
  currentDate: Date,
};

type Props = {
  name: string
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentDate: new Date(),
  };

  timer?: NodeJS.Timeout;

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ currentDate: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.currentDate.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
    // eslint-disable-next-line no-console
      console.log(`clock name changed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { currentDate } = this.state;
    const { name } = this.props;
    const currentTime = currentDate.toLocaleTimeString();

    return (
      <>
        <span>{`<<${name}>>`}</span>
        <span>{' '}</span>
        <span>{currentTime}</span>
      </>
    );
  }
}
