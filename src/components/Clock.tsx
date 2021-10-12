import React from 'react';

type Props = {
  name: number,
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  timer?: number;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ name }: Props) {
    if (name !== this.props.name) {
      // eslint-disable-next-line
    console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <p className="time">
        Current time:
        {' '}
        <strong>
          {date.toLocaleTimeString()}
        </strong>
      </p>
    );
  }
}
