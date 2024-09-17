import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  time = 0;

  componentDidMount(): void {
    this.time = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today);
    }

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.time);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
