import React from 'react';

interface Props {
  name: number,
}

interface State {
  date: string,
}

export class Clock extends React.Component<Props, State> {
  timerId?: number;

  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate({ name }: Props) {
    if (this.props.name !== name) {
      // eslint-disable-next-line no-console
      console.log(`Rename clock from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <>
        <p>{`Current time: ${date}`}</p>
        <p>{`Random name: ${name}`}</p>
      </>
    );
  }
}
