import React from 'react';

type Time = NodeJS.Timer | null;

interface Props {
  name: string;
}

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  timerId: Time = null;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        {this.state.date.toLocaleTimeString()}
      </>
    );
  }
}
