import React from 'react';

type Props = {
  name: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.info(this.state.currentTime.toUTCString().slice(-12, -4));
  }

  render() {
    const {
      name,
    } = this.props;

    const {
      currentTime,
    } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
