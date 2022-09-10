import React from "react";
import "../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className='logo'>
        <Link to='/'><h1>Bookshelf</h1></Link>
        </div>
        <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/booklist">BookList</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/addbook">AddBook</Link>
        </div>
    </div>    
  );
};

export default Navbar;