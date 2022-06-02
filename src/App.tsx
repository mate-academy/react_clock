import React from 'react';
import { Clock } from './components/Clock';

const names: string[] = [
  'Good night!',
  'Good Morning!',
  'Nice Clock',
  'Glory to Ukraine!',
  'Sunny Day!',
  'Rainy clock',
  'Loading...',
  'Something went wrong',
  'React Clock',
  'Bomb has been planted!',
  'Internal pointer variable',
];

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'React Clock',
  };

  getName = () => (
    this.setState({
      clockName: names[Math.floor(Math.random() * names.length)],
    })
  );

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App box container is-max-desktop">
        <div className="is-flex is-flex-direction-column is-align-items-center">
          {isClockVisible && (
            <h1 className="title">
              <Clock name={clockName} />
            </h1>
          )}
          <div>
            <button
              type="button"
              className="button is-danger"
              onClick={() => {
                this.setState({ isClockVisible: false });
              }}
            >
              Hide Clock
            </button>

            <button
              type="button"
              className="button is-success ml-4"
              onClick={() => {
                this.setState({ isClockVisible: true });
              }}
            >
              Show Clock
            </button>

            <button
              type="button"
              className="button is-link ml-4"
              onClick={() => {
                this.getName();
              }}
            >
              Set random name
            </button>

          </div>
        </div>
      </div>
    );
  }
}
