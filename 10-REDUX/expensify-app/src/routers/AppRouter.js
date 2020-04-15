import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/*  
  REACT-ROUTER ( client-side Navigation Element)
    = BrowserRouter == is the whole element navigation like nav
    = Route == is the link to each page
    = Switch == renders a route exclusively & checks through the route definitions in order and does NOT look at the others
    = 404 Page == is the page that should render when a page does not exist
    = Links == link independent links to other pages

*/

//Components
import Dashboard from '../components/AppRouter/DashboardPage';
import Add from '../components/AppRouter/AddExpensePage';
import Edit from '../components/AppRouter/EditExpensePage';
import Help from '../components/AppRouter/HelpPage';
import NotFound from '../components/AppRouter/NotFoundPage';
import Header from '../components/AppRouter/Header';



//! Challenge Two
// Create 6 new files for the 6 components
// setup imports, components, default exports
// import into AppRouter

//PAGES (ROUTES) == COMPONENTS
// Dashboard
// Edit
// Add
// Help
// 404
// Header
  
  //Challenge One
  // /edit EditExpensePage
  // /help HelpPage
  
  //! Challenge Two
  // link to homepage
  // link to the create expense page
  // link to the edit page
  // link to the help page
  
  // Creates all client-side pages
const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/create" component={Add} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/help" component={Help} />
            <Route component={NotFound} />
        </Switch>
        </div>    
    </BrowserRouter>
);
export default AppRouter;