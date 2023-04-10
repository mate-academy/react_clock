/* eslint-disable no-console */
import React from 'react';
// import { render } from 'react-dom';
import './App.scss';
// import { event } from 'cypress/types/jquery';

type State = {
  time: string;
  hasTime: boolean,
};

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: '',
    hasTime: true,
  };

  componentDidMount(): void {
    window.addEventListener('click', this.timerState);
    window.setInterval(() => {
      const time = new Date().toLocaleTimeString();

      this.setState({ time });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.hasTime && this.state.time !== prevState.time && prevProps) {
      console.info(this.state.time);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.timerState);
  }

  timerState = (e: MouseEvent) => {
    if (e.button === 2) {
      this.setState({ hasTime: false });
    } else {
      this.setState({ hasTime: true });
    }
  };

  render(): React.ReactNode {
    return (

      <>
        <div className="Clock">
          <strong className="Clock__name">
            {this.props.name}
          </strong>

          {' time is '}
          <span className="Clock__time">
            {this.state.time}
          </span>

        </div>

      </>
    );
  }
}
