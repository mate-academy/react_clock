import React from 'react';

type Props = {
  name: number;
};

interface State {
  data: string,
}

export class Clock extends React.Component<Props, State> {
  clockInterval: number | undefined;

  state:State = {
    data: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.clockInterval = window.setInterval(() => {
      this.setState({ data: new Date().toLocaleTimeString() });
      /* eslint-disable no-console */
      console.log(this.state.data);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    const { data } = this.state;

    return (<>{ data }</>);
  }
}
