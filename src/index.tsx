import ReactDOM from 'react-dom';
import { App } from './App';

const initialState = {
  clockName: 'Clock-0',
  hasClock: true,
  timerId: 0,
};

ReactDOM.render(<App {...initialState} />, document.getElementById('root'));
