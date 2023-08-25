import React from 'react';

type Props = {
  name: string,
};

type State = {
  currTime: Date,
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    currTime: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const thisTime = new Date();
      /* eslint-disable no-console */

      this.setState({ currTime: thisTime });

      console.info(thisTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      /* eslint-disable no-console */
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { currTime } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
