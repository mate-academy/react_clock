import React from 'react';

type Props = {
  name: string
  isClockVisible: boolean;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  constructor(props:Props, public timerId: NodeJS.Timer) {
    super(props);
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });

      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock" data-cy="time">
        <h1>
          React clock
          {' '}
          {this.props.name ? this.props.name : 'Unknown Fruit'}
        </h1>
        <p>
          Current time:
          {' '}
          {this.props.isClockVisible
            ? this.state.date.toLocaleTimeString()
            : ''}
        </p>
      </div>
    );
  }
}
