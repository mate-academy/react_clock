import React from 'react';

interface State {
  today: Date,
}

interface ClocksProps {
  name: string,
}

export class Clock extends React.Component<ClocksProps, State> {
  state = {
    today: new Date(),
  };

  intervalId = 0;

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      const today = new Date();

      this.setState({ today });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClocksProps>,
    prevState: Readonly<State>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

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
