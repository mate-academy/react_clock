import React from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
  onNameChange: (name: string) => void;
};

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId: number | null = null;

  nameTimeoutId: number | null = null;

  updateName = () => {
    const newName = getRandomName();
    const oldName = this.props.name;

    // eslint-disable-next-line no-console
    console.warn(`Renamed from ${oldName} to ${newName}`);
    this.props.onNameChange(newName);

    this.nameTimeoutId = window.setTimeout(this.updateName, 3300);
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date();

      this.setState({ today: currentTime });

      // eslint-disable-next-line no-console
      console.log(currentTime.toUTCString().slice(-12, -4));
    }, 1000);

    this.nameTimeoutId = window.setTimeout(this.updateName, 3300);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    if (this.nameTimeoutId) {
      clearTimeout(this.nameTimeoutId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
