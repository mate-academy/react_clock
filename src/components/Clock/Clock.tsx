import React from 'react';

interface State {
  currentTime: string;
}

type Props = {
  name: string;
};

function getTimeFromDate(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

const initialDate = new Date();
const initialTime = getTimeFromDate(initialDate);

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: initialTime,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const today = new Date();
      const currentTime = getTimeFromDate(today);

      // eslint-disable-next-line
      console.info(currentTime);

      this.setState({
        currentTime,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.debug(prevProps.name, this.props.name);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <>
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">
            {name}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {currentTime}
          </span>
        </div>
      </>
    );
  }
}
