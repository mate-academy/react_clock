import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

type State = {
  clockShow: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockShow: true,
    clockName: 'Clock 777',
  };

  componentDidMount() {
    document.addEventListener('click', this.clockIsVisible);
    document.addEventListener('contextmenu', this.clockIsHidden);
  }

  setRandomClockName = setInterval(() => {
    const random = Math.random().toString().slice(2, 6);

    this.setState({ clockName: `Clock ${random}` });
  }, 5000);

  clockIsVisible = () => {
    this.setState({ clockShow: true });
  };

  clockIsHidden = () => {
    this.setState({ clockShow: false });
  };

  render() {
    const { clockShow, clockName } = this.state;

    return (
      <div>
        <h1 className="title is-size-3 has-text-centered mt-6">React clock</h1>
        <div>{ clockShow && <Clock name={clockName} /> }</div>
      </div>
    );
  }
}
