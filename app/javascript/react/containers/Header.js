import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
  return(
    <nav className="top-bar">
      <div className="full-width">
        <div className="links-section">
          <section className="top-bar-section">
            <ul className="center">
                <li><Link to="/dashboard/home">Home</Link></li>
            </ul>
            <ul className="center">
                <li><Link to="/dashboard/recipes">Recipes</Link></li>
            </ul>
            <ul className="center">
                <li><Link to="/dashboard/brews">Brews</Link></li>
            </ul>
            <ul className="center">
                <li><Link to="/dashboard/nowBrewing">Now Brewing</Link></li>
            </ul>
            <ul className="center">
                <li><Link to="/dashboard/newRecipe">New Recipe</Link></li>
            </ul>
            <ul className="center">
                <li><Link to="/dashboard/findBeer">Find Beer</Link></li>
            </ul>
          </section>
        </div>
      </div>
      <link rel="preload" as="image" href="https://s3.amazonaws.com/bruby/site_images/hazybeer.jpg"/>
      <img src="https://s3.amazonaws.com/bruby/site_images/hazybeer.jpg" width="1" height="1" />
      <link rel="preload" as="image" href="https://s3.amazonaws.com/bruby/site_images/437743.jpg"/>
      <img src="https://s3.amazonaws.com/bruby/site_images/437743.jpg" width="1" height="1" />
      <link rel="preload" as="image" href="https://s3.amazonaws.com/bruby/site_images/413078.jpg"/>
      <img src="https://s3.amazonaws.com/bruby/site_images/413078.jpg" width="1" height="1" />
      <link rel="preload" as="image" href="https://s3.amazonaws.com/bruby/site_images/boilingWort.png"/>
      <img src="https://s3.amazonaws.com/bruby/site_images/boilingWort.png" width="1" height="1" />
      <link rel="preload" as="image" href="https://s3.amazonaws.com/bruby/site_images/Cooper-River-Brewery.jpg"/>
      <img src="https://s3.amazonaws.com/bruby/site_images/Cooper-River-Brewery.jpg" width="1" height="1" />
      <link rel="preload" as="image" href="https://s3.amazonaws.com/bruby/site_images/beer_bottles_homebrew.jpg"/>
      <img src="https://s3.amazonaws.com/bruby/site_images/beer_bottles_homebrew.jpg" width="1" height="1" />
    </nav>
  )
}
export default Header;
