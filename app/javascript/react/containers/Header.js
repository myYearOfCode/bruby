import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipeName: ''
    }
  }
  render () {
    return(
      <nav className="top-bar">
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
          </section>
        </div>
      </nav>
    )
  }
}
// <div>
//   <ul>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/dashboard/first">First</Link>
//     </li>
//     <li>
//       <Link to="/dashboard/second">Second</Link>
//     </li>
//     <li>
//       <Link to="/dashboard/third">Third</Link>
//     </li>
//     <li>
//       <Link to="/dashboard/fourth">Fourth</Link>
//     </li>
//   </ul>
// </div>
export default Header;
