import React from 'react';

type Name = {
  name: number,
};

export class Clock extends React.Component<Name> {
  timerId: NodeJS.Timer = setInterval(() => {
  }, 1000);

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  // eslint-disable-next-line
  componentDidUpdate(prevProps: Name) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log('The Clock was renamed from oldName to newName');
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;

    return (
      <p>
        Current time:
        {' '}
        {date.toLocaleTimeString()}
      </p>
    );
  }
}
