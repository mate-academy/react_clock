import { Component } from 'react';
import { formatedDate } from '../helper/helper';

interface Props {
  clockName: string;
}

interface State {
  today: Date;
}

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      /* eslint-disable */
      console.info(formatedDate(this.state.today));
      /* eslint-enable */
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      /* eslint-disable */
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`)
      /* eslint-enable */
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formatedDate(today)}
        </span>
      </div>
    );
  }
}
