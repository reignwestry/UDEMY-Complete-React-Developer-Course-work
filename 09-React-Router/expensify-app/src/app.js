import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const App = () => (
  <div>
    <AppRouter />


  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
