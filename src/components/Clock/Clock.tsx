import React from 'react';

type Props = {
  name: number;
};

export class Clock extends React.Component<Props> {
  state = {
    curTime: new Date().toLocaleTimeString(),
  };

  clockIntervalID?: number;

  componentDidMount() {
    this.clockIntervalID = window.setInterval(() => {
      this.setState({ curTime: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.curTime);
    }, 1000);
  }

  componentDidUpdate({ name }: Props) {
    if (name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.clockIntervalID);
  }

  render() {
    const { curTime } = this.state;

    return (
      <span className="Clock">
        {curTime}
      </span>
    );
  }
}
