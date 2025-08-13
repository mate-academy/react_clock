import React from 'react';

interface Props {
  name: string;
}

interface State {
  today: Date;
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timeTimerId?: number;

  componentDidMount() {
    this.timeTimerId = window.setInterval(() => {
      const now = new Date();

      this.setState({ today: now });
      // eslint-disable-next-line no-console
      console.log(now.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name != this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timeTimerId) {
      clearInterval(this.timeTimerId);
    }
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
