import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  sliceDate = (date: Date) => {
    return date.toUTCString().slice(-12, -4);
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = this.sliceDate(new Date());

      this.setState({
        today,
      });

      // eslint-disable-next-line no-console
      console.log(today);
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
