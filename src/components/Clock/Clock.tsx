import React from 'react';

type State = {
  date: Date,
};

type Props = {
  name: number;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId: NodeJS.Timeout | undefined;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    },
    1000);
  }

  componentDidUpdate(prevProps: Props) {
    const previousName = prevProps.name;
    const { name: newName } = this.props;

    if (previousName !== newName) {
      // eslint-disable-next-line
    console.log(`The Clock was renamed from ${previousName} to ${newName}.`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const viewTime = this.state.date.toLocaleTimeString();

    return (
      <>
        {viewTime}
      </>
    );
  }
}
