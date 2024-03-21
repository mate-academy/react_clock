import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  interval = 0;

  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.interval = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.interval);
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
