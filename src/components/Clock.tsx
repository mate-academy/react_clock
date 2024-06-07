import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: string;
};

function getCurrentDate() {
  const date = new Date();

  return date.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state = {
    today: getCurrentDate(),
  };

  clockId = 0;

  componentDidMount(): void {
    this.clockId = window.setInterval(() => {
      this.setState({ today: getCurrentDate() });
      // eslint-disable-next-line no-console
      console.log(getCurrentDate());
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockId);
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
