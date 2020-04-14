import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioRouter from './routers/PortfolioRouter.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const App = () => (
  <div>
    <PortfolioRouter />


  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
