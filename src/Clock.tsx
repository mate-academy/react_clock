import React from 'react';

type State = {
  today: Date,
};

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId2 = 0;

  componentDidMount() {
    this.timerId2 = window.setInterval(() => {
      const today = new Date();

      this.setState({ today });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(PrevProp: Props) {
    if (PrevProp.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${PrevProp.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId2);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
