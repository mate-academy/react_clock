import React from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId2 = 0;

  componentDidMount() {
    this.timerId2 = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId2);
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

        <span>
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
