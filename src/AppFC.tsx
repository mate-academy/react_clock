import React, {
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import './App.scss';
import { ClockFC } from './components/clockFC';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  prevClockName: string | null;
};

type Action = { type: 'SET_CLOCK_NAME'; payload: string };

const clockReducer = (
  state: State,
  action: Action,
) => {
  switch (action.type) {
    case 'SET_CLOCK_NAME':
      return {
        ...state,
        prevClockName: state.clockName,
        clockName: action.payload,
      };
    default:
      return state;
  }
};

export const AppFC: React.FC = () => {
  const [hasClock, setHasClock] = useState(true);
  const firstRender = useRef(true);

  const [state, dispatch] = useReducer(clockReducer, {
    clockName: 'Clock-0',
    prevClockName: null,
  });

  const { clockName, prevClockName } = state;

  const handleHideClock = (event: MouseEvent) => {
    event.preventDefault();

    setHasClock(false);
  };

  const handleShowClock = () => {
    setHasClock(true);
  };

  useEffect(() => {
    document.addEventListener('contextmenu', handleHideClock);
    document.addEventListener('click', handleShowClock);

    const printClockName = window.setInterval(() => {
      dispatch({ type: 'SET_CLOCK_NAME', payload: getRandomName() });
    }, 3300);

    return () => {
      document.removeEventListener('contextmenu', handleHideClock);
      document.removeEventListener('click', handleShowClock);
      clearInterval(printClockName);
    };
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;

      return;
    }

    if (hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${clockName}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clockName]);

  return (
    <div className="App">
      <h1>React clock</h1>

      {hasClock && (
        <ClockFC
          clockName={clockName}
        />
      )}
    </div>
  );
};
