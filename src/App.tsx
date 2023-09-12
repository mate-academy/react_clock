import './App.scss';
import { Clock } from './components/Clock';

export const App = () => {
  return (
    <div className="App">
      <h1>React clock</h1>
      <Clock />
    </div>
  );
};
