import React from 'react';
import './App.scss';
import { Clock } from './components/timer';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}
type Props = {

}

type State = {
  today: Date;
  clockName: string;
  hasClock: boolean,
}


export class App extends React.Component<Props, State> {
  private timerId: number | null = null;
  state: Readonly<State> = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };



  componentDidMount() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({
        hasClock: false,
      });
    });

    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      })
    }, 3300);

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', () => {

    })
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }


};
