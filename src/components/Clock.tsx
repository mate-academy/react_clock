import React from 'react';

type State = {
  data: string;
};

export class Clock extends React.Component<{ name: number | null }, State> {
  state = {
    data: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ data: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.data);
    }, 1000);
  }

  componentDidUpdate(prevProps: { name: number }) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from oldName ${prevProps.name} to newName ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render(): React.ReactNode {
    return this.state.data;
  }
}
