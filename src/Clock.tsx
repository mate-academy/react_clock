import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: string;
};

export class Clock extends React.Component<Props, State> {
  timerId?: number;

  state = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newDate = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(newDate);
      this.setState({ currentTime: newDate });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}
