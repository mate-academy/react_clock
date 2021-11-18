import React from 'react';
import './Clock.scss';

type Props = {
  clockName: string | number;
};

export class Clock extends React.Component<Props> {
  state = {
    currentTime: new Date(),
  };

  timerId!: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date() });
      // console.log(this.state.currentTime.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.clockName;
    const newName = this.props.clockName;
    // console.clear();

    if (oldName !== newName) {
      // console.log(`The Clock was renamed from ${oldName} to ${newName}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <>
        <div className="Clock">
          <h1>{this.props.clockName}</h1>
          <p>
            {'Current time: '}
            <strong>{this.state.currentTime.toLocaleTimeString()}</strong>
          </p>
        </div>
      </>
    );
  }
}
