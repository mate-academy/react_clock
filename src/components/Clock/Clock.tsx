import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

export class Clock extends React.Component<Props, State> {
  state = {
    time: getCurrentTime(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: getCurrentTime() });
      // eslint-disable-next-line no-console
      console.info(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time}
        </span>
      </div>
    );
  }
}
