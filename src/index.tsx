import ReactDOM from 'react-dom';
import { App } from './App';

const initialState = {
  clockName: 'Clock-0',
  hasClock: true,
};

ReactDOM.render(
  <App {...initialState} />,
  document.getElementById('root'),
);
