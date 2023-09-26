import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

function getFormattedDate(today: Date) {
  return today.toUTCString().slice(-12, -4);
}

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(getFormattedDate(this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const { name: prevName } = prevProps;
    const { name } = this.props;

    if (prevName !== name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {getFormattedDate(today)}
        </span>
      </div>
    );
  }
}
