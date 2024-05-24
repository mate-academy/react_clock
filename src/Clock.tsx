import React from 'react';

type Props = {
  name: string;
};

type StateProps = {
  clockName: string;
  today: string;
};

export class Clock extends React.Component<Props> {
  state: Readonly<StateProps> = {
    clockName: this.props.name,
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  updateTime = () => {
    // eslint-disable-next-line no-console
    console.log(new Date().toUTCString().slice(-12, -4));

    this.setState({ today: new Date().toUTCString().slice(-12, -4) });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(this.updateTime, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
