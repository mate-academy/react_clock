import React from 'react';

type Props = {
  name: string
};

type State = {
  today: Date,
};

export class Clock extends React.Component<Props> {
  state: State = {
    today: new Date(),
  };

  dateTimerId = 0;

  componentDidMount(): void {
    this.dateTimerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.info(new Date().toUTCString().slice(-12, -4));
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.dateTimerId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
