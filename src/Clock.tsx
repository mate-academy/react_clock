import React from 'react';

type Props = {
  name: number
};

type State = {
  date: string,
};

export class Clock extends React.Component<Props, State> {
  timerId: NodeJS.Timer | null = null;

  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { date } = this.state;

    return (
      <>
        {date}
      </>
    );
  }
}
