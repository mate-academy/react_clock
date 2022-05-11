import React from 'react';

type State = {
  time: string;
};

type Props = {
  name: number;
};

export class Clock extends React.Component<Props, State> {
  timerId?: NodeJS.Timer;

  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });

      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate({ name: oldName }: Props) {
    const { name } = this.props;

    if (oldName !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <p className="Clock">
        {'Current time: '}
        {this.state.time}
      </p>
    );
  }
}
