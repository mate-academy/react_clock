import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  id = () => {
    this.setState({ today: new Date() });
    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));
  };

  secondInterval: number | undefined;

  componentDidMount(): void {
    this.secondInterval = window.setInterval(this.id, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.secondInterval);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const oldName = prevProps.name;
    const neWName = this.props.name;

    if (oldName !== neWName) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${oldName} to ${neWName}`);
    }
  }

  render() {
    const name = this.props.name;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
