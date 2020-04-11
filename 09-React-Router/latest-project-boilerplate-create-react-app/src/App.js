import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';





const ExpenseDashboardPage = () => {
  return(
  <div>
      This is from my dashboard component.
  </div>
  );
}

const AddExpensePage = () => {
  return(
  <div>
      This is from my Add Expense component.
  </div>
  );
}

const EditExpensePage = () => {
  return(
  <div>
      This is from my Edit Expense component.
  </div>
  );
}

const HelpPage = () => {
  return(
  <div>
      This is from my Help Page component
  </div>
  );
}

const Header = () => {
  return(
    <BrowserRouter>
      <div>
          <Route path="/"  component={ExpenseDashboardPage} exact={true}/>
          <Route path="/create"  component={AddExpensePage}/>
          <Route path="/edit"  component={EditExpensePage}/>
          <Route path="/help"  component={HelpPage}/>

      </div>
    </BrowserRouter>

  )
}

function App() {
  return (
    <div className="App">
      <Header />

    </div>
  );
}

export default App;
