import React from 'react';
import ReactDOM from 'react-dom';
//React-Router
import {BrowserRouter, Route} from 'react-router-dom';
//Style Sheets
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => {
    <div>
        This is from my dashboard component.
    </div>
};

const AddExpensePage = () => {
    <div>
        This is from my Add Expense component.
    </div>
};

const EditExpensePage = () => {
    <div>
        This is from my Edit Expense component.
    </div>
};

const HelpPage = () => {
    <div>
        This is from my Help Page component
    </div>
};

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/"  component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create"  component={AddExpensePage}/>
            <Route path="/edit"  component={EditExpensePage}/>
            <Route path="/help"  component={HelpPage}/>

        </div>
    </BrowserRouter>
);



ReactDOM.render( routes, document.getElementById('app'));
