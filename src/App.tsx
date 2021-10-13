import React from 'react';
import './App.scss';
import { OpenWatch } from './Classes/OpenWatch';
import RandomStyles from './RandomStyles/RandomStyles.json';

type State = {
  isClockVisible: boolean;
  randomIndex: number;
};

type Props = {};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: false,
    randomIndex: 0,
  };

  componentDidMount() {
    document.querySelector('.watch__display')?.addEventListener('click', () => {
      this.setState((state) => {
        return { isClockVisible: !state.isClockVisible };
      });
    });

    document.querySelector('.watch__button-style')?.addEventListener('click', () => {
      function newRandomIndex(i:number): number {
        const y = Math.floor(Math.random() * 5);

        if (i !== y) {
          return y;
        }

        return newRandomIndex(i);
      }

      this.setState((state) => {
        return { randomIndex: newRandomIndex(state.randomIndex) };
      });
    });
  }

  render() {
    const { isClockVisible, randomIndex } = this.state;
    const watch = RandomStyles[randomIndex];

    return (
      <div className="watch">
        <button
          type="button"
          className={`watch__display display display--${isClockVisible && randomIndex}`}
          style={isClockVisible ? watch.styles : { backgroundColor: 'black' }}
        >
          {
            isClockVisible
              && <OpenWatch watch={watch} />
          }
        </button>
        <button className="watch__button-style" type="button"> </button>
      </div>
    );
  }
}

export default App;
