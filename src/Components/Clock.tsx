import React from 'react';

type Props = {
  name: string,
};

type State = {
  today: Date,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
  ): void {
    if (prevProps.name !== this.props.name) {
      const message = `Renamed from ${prevProps.name} to ${this.props.name}`;

      // eslint-disable-next-line no-console
      console.debug(message);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;
    const time = today.toUTCString().slice(-12, -4);

    return (
      <>
        <div className="Clock">
          <strong className="Clock__name">
            {name}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {time}
          </span>
        </div>
      </>
    );
  }
}
