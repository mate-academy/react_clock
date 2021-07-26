import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

import Clock from './components/Clock/Clock';
import './App.scss';

export default function App() {
  return (
    <Card className="App">
      <Clock />
    </Card>
  );
}
