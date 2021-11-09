import React from 'react';
import './Clock.scss';

interface Props {
  name: number
}

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  timerId: NodeJS.Timer = setInterval(() => { }, 1000);

  componentDidMount() {
    this.timerId = setInterval(
      () => {
        this.setState({ date: new Date() });

        // eslint-disable-next-line
        console.log(this.state.date.toLocaleTimeString());
      },
      1000,
    );
  }

  componentDidUpdate(previousName: Props) {
    if (previousName.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${previousName.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <span>
        {this.state.date.toLocaleTimeString()}
      </span>
    );
  }
}
