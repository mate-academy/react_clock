import React from 'react';

type ClockState = {
  today: string;
};

type NameProp = {
  name: string;
};

export class Clock extends React.Component<NameProp, ClockState> {
  private timeId: NodeJS.Timeout | null = null;

  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({
        today: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<NameProp>) {
    // eslint-disable-next-line no-console
    console.log(this.state.today);

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timeId) {
      clearInterval(this.timeId);
    }
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
