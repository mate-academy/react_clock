import React from 'react';

type Props = {
  name: number;
};
export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
    timerId: null,
  };

  componentDidMount() {
    const timerId: NodeJS.Timer = setInterval(() => {
      const date: Date = new Date();

      this.setState({
        date: new Date(),
      });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);

    this.setState({
      timerId,
    });
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.name;

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldName} to ${this.props.name} `);
    }
  }

  componentWillUnmount() {
    if (this.state.timerId !== null) {
      clearInterval(this.state.timerId);
    }
  }

  render(): React.ReactNode {
    return (
      <>
        Current time:
        {' '}
        {this.state.date.toLocaleTimeString()}
        <p>
          Clock name:
          {' '}
          {this.props.name}
        </p>
      </>
    );
  }
}
