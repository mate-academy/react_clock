import React from 'react';

type Props = {
  name: string;
};

type State = {
  date: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timer: undefined | NodeJS.Timeout;

  componentDidMount() {
    this.timer = setInterval(() => {
      const date = new Date().toLocaleTimeString();

      this.setState({
        date,
      });
      // eslint-disable-next-line
      console.log(date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name: previousName } = prevProps;
    const { name: currentName } = this.props;

    if (previousName !== currentName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${previousName} to ${currentName}`);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <>
        <h1>{name}</h1>
        <p>{`Current time: ${date}`}</p>
      </>
    );
  }
}
