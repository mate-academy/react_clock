import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.contectmenuHandler);

    document.addEventListener('click', this.clickHandler);
  }

  componentDidUpdate(
    _: Readonly<{}>,
    prevState: Readonly<State>,
  ) {
    // eslint-disable-next-line no-console
    console.debug(prevState, this.state);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.contectmenuHandler);
    document.removeEventListener('click', this.clickHandler);
  }

  contectmenuHandler = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  clickHandler = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {
          hasClock && <Clock clockName={clockName} />
        }
      </div>
    );
  }
}
