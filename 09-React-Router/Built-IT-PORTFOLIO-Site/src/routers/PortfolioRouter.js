import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Home from '../components/PortfolioRouter/Home';
import Contact from '../components/PortfolioRouter/Contact';
import NotFound from '../components/PortfolioRouter/NotFoundPage';
import Header from '../components/PortfolioRouter/Header';
import Portfolio from '../components/PortfolioRouter/Portfolio';
import PortfolioItem from '../components/PortfolioRouter/PortfolioItem';



/*
TODO
 Portfolio Router
 Show header/nav bar on all page including 404
    
    Paths
    /               -> Home page (in nav)
    /portfolio      -> Portfolio home page with links to items (in nav)
    /portfolio/123  -> Individual portfolio item page that shows the ID
    /contact        -> Contact page (in nav)


*/

const PortfolioRouter = () => (
    <BrowserRouter>
        <div>
          <Header />
          <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/portfolio/" component={Portfolio} exact={true}/>
              <Route path="/portfolio/:id" component={PortfolioItem} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
          </Switch>
        </div>    
    </BrowserRouter>
);
export default PortfolioRouter;