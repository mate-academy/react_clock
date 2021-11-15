import React from 'react';

type Props = {
  name: number,
};

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  timerId!: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: { name: number; }) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <span>
        { this.state.date.toLocaleTimeString() }
        { // eslint-disable-next-line no-console
          console.log(this.state.date.toLocaleTimeString())
        }
      </span>
    );
  }
}
