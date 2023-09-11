import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  <App date={new Date()} clockName="Clock-0" showClock />,
  document.getElementById('root'),
);
