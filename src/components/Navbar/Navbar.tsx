// import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";


export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="title">Creatoverse</Link>
        <ul>
            <li>
                <NavLink to="dashboard">Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="addcreator">Add Creator</NavLink>
            </li>
        </ul>
    </nav>
}
