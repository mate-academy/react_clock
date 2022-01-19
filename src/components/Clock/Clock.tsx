import React from 'react';

type Props = {
  name: number;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log('The Clock was renamed from oldName to newName');
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <span className="time">{this.state.date.toLocaleTimeString()}</span>
    );
  }
}
