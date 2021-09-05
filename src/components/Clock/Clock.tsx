import React from 'react';

type Props = {
  name: string,
};

type State = {
  clock: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    clock: '',
  };

  start = setInterval(() => {
    const date = new Date();

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
    this.setState({ clock: date.toLocaleTimeString() });
  }, 1000);

  componentDidMount() {
    return this.start;
  }

  componentWillUnmount() {
    clearInterval(this.start);
  }

  render() {
    const { clock } = this.state;

    return (
      <>
        <h1>{ this.props.name }</h1>
        <p>
          Current time:
          {' '}
          {clock}
        </p>
      </>
    );
  }
}
