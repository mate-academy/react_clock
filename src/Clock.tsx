import React from 'react';
import './App.scss';

type Props = { clockName: string };
type State = { today: Date };

class Clock extends React.Component <Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  updateTimeId = 0;

  updateNameId = 0;

  componentDidMount(): void {
    this.updateTimeId = window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      console.info(this.state.today.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName: oldName } = prevProps;
    const { clockName: newName } = this.props;

    if (newName !== oldName) {
      // eslint-disable-next-line no-console
      console.info(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.updateTimeId);
  }

  render() {
    return (
      <div>
        <div className="Clock">
          <strong className="Clock__name">
            {this.props.clockName}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {this.state.today.toLocaleTimeString()}
          </span>
        </div>
      </div>
    );
  }
}

export default Clock;
