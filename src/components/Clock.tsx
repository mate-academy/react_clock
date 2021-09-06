import React from 'react';

type Props = {
  clockName: number;
};

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  watch = setInterval(() => {
    this.setState({ date: new Date() });
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.watch;
  }

  componentWillUnmount() {
    clearInterval(this.watch);
  }

  render() {
    return (
      <>
        <p>
          {'Current time: '}
          {this.state.date.toLocaleTimeString()}
        </p>
      </>
    );
  }
}
