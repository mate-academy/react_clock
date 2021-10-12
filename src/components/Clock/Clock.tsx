import React from 'react';

type Props = {
  name: number;
  isClockVisible: boolean;
};

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (this.props.isClockVisible) {
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }
  }

  render() {
    const { date } = this.state;

    return (
      <>
        {this.props.isClockVisible && date.toLocaleTimeString()}
      </>
    );
  }
}
