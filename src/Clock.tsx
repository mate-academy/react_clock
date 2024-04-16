import React from 'react';

interface Props {
  name: string;
}

interface State {
  today: Date;
}

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  state: State = {
    today: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date();

      this.setState({ today: currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
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
