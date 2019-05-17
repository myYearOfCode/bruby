import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
  return(
    <div className="full-width">
        <div className="links-section">
          <div className="headerLink">
              <Link to="/dashboard/recipes">Recipes</Link>
          </div>
          <div className="headerLink">
              <Link to="/dashboard/brews">Reviews</Link>
          </div>
          <div className="headerLink">
              <Link to="/dashboard/nowBrewing">Now Brewing</Link>
          </div>
          <div className="headerLink">
              <Link to="/dashboard/newRecipe">New Recipe</Link>
          </div>
          <div className="headerLink">
              <Link to="/dashboard/findBeer">Find Beer</Link>
          </div>
        </div>
      <div className="hiddenImages">
        <img hidden src="https://s3.amazonaws.com/bruby/site_images/hazybeer.jpg" width="1" height="1" />
        <img hidden src="https://s3.amazonaws.com/bruby/site_images/437743.jpg" width="1" height="1" />

        <img hidden src="https://s3.amazonaws.com/bruby/site_images/413078.jpg" width="1" height="1" />

        <img hidden src="https://s3.amazonaws.com/bruby/site_images/boilingWort.png" width="1" height="1" />

        <img hidden src="https://s3.amazonaws.com/bruby/site_images/Cooper-River-Brewery.jpg" width="1" height="1" />

        <img hidden src="https://s3.amazonaws.com/bruby/site_images/beer_bottles_homebrew.jpg" width="1" height="1" />
      </div>
    </div>
  )
}
export default Header;
