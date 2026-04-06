import React from 'react';

import './Clock.scss';

type Props = {
  name: string;
};
type State = {
  today: Date;
};

export class Clock extends React.PureComponent<Props, State> {
  state = {
    today: new Date(),
  };

  intervalId = 0;

  componentDidMount = () => {
    this.intervalId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));

      this.setState({
        today: new Date(),
      });
    }, 1_000);
  };

  componentWillUnmount = () => {
    window.clearInterval(this.intervalId);
  };

  componentDidUpdate = (prevProps: Readonly<Props>) => {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${oldName} to ${newName}`);
    }
  };

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
