import React from 'react';
import { Link } from 'react-router-dom';


const Portfolio = (props) => {
  console.log(props);
  return(
    <div>
      <h1>My Work</h1>
      <p>Check out the stuff I've done:</p>
      <div>
        <Link to="/portfolio/1">Item_One</Link>
        <Link to="/portfolio/2">Item_Two</Link>
      </div> 
    </div>
  );
};
export default Portfolio;