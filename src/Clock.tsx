import React from 'react';

type State = {
  time: string;
};

type Props = {
  name: number;
};

class CLock extends React.Component<Props, State> {
  state = {
    time: '',
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: string = new Date().toLocaleTimeString();

      this.setState({ time: date });

      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to newName ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="App__clock" data-cy="time">
        {time}
      </div>
    );
  }
}

export default CLock;
