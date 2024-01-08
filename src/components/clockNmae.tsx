import React from 'react';

type ClockNameProps = {
  onUpdateClockName: (newClockName: string) => void;
};

type State = {
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class ClockName extends React.Component<ClockNameProps, State> {
  state: State = {
    clockName: 'Clock-0',
  };

  updateClockName = window.setInterval(() => {
    const newClockName = getRandomName();

    this.setState({
      clockName: newClockName,
    });

    this.props.onUpdateClockName(newClockName);
  }, 3300);

  componentWillUnmount() {
    clearInterval(this.updateClockName);
  }

  render() {
    const { clockName } = this.state;

    return (
      <strong className="Clock__name">
        {clockName}
      </strong>
    );
  }
}
