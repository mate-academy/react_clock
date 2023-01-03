import React from 'react';
import './styles/Clock.scss';

type Props = {
  name: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });

      // eslint-disable-next-line no-console
      console.info(this.state.today);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.timer);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <span className="Clock__name">
          <strong>
            {name}
          </strong>
        </span>
        <p className="Clock__description">time is</p>
        <div className="Clock-container">
          <div className="Clock__rim" />
          <div className="Clock__outer" />
          <div className="Clock__inner" />
          <div className="Clock__time-container">
            <span className="Clock__time">
              {today}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
