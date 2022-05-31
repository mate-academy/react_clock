import React from 'react';

interface State {
  date: string;
}

interface Props {
  name: number;
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: '',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
      this.setState({ date: date.toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProp: Props) {
    if (prevProp.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`New clock name is ${this.props.name}`);
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
