import ReactDOM from 'react-dom';
import { App } from './App';
import { names } from './api/clockNames';

ReactDOM.render(
  <App listOfNames={names} />,
  document.getElementById('root'),
);
