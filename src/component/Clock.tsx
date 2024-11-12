import React from 'react';

interface Props {
  clockName: string;
}

interface State {
  today: Date;
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  componentDidMount(): void {
    const timerId = setInterval(() => {
      const newTime = new Date();

      // eslint-disable-next-line no-console
      console.log(newTime.toUTCString().slice(-12, -4));
      this.setState({ today: newTime });
    }, 1000);

    this.componentWillUnmount = () => clearInterval(timerId);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
