import React from 'react';

type Props = {
  name: string,
};

type State = {
  today: Date,
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(this.setNewDate, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name !== this.props.name) {
      const oldName = prevProps.name;
      const newName = this.props.name;

      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  setNewDate = () => {
    this.setState({ today: new Date() });
    // eslint-disable-next-line no-console
    console.info(this.state.today.toUTCString().slice(-12, -4));
  };

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
