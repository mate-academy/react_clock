import React from 'react';

type Props = {
  name: number;
};

type State = {
  date: string;
  name?: number;
};

class Clock extends React.Component<Props, State> {
  state = {
    date: (new Date()).toLocaleTimeString(),

  };

  private timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const time: string = (new Date()).toLocaleTimeString();

      this.setState({ date: time });
      // eslint-disable-next-line no-console
      console.log(time);
    }, 1000);
  }

  componentDidUpdate(prevProps:Props) {
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
    return (
      <div>
        {this.state.date}
      </div>
    );
  }
}

export default Clock;
