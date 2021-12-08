import React from 'react';

type Props = {
  clockName: number
};

export class Clock extends React.Component<Props> {
  timerId: NodeJS.Timer | undefined;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ clockName: oldName }: Props) {
    const { clockName: newName } = this.props;

    if (newName !== oldName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${newName}`);
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
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
