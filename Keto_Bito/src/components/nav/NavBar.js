import React, { Component } from "react"
import { Link } from "react-router-dom"
import './NavBar.css'
// import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

    render() {
        return (
            <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-">
                        <Link className="nav-link-home" id="logo" style={{ textDecoration: 'none' }} to="/"><img src={ require('/Users/Bito1/workspace/front-end-capstone/keto-bito/src/components/nav/1575840946148.png') } /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="keto-bito" style={{ textDecoration: 'none' }} to="/">Keto-Bito</Link>
                    </li>
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={{ textDecoration: 'none' }} to="/foods">FOODS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={{ textDecoration: 'none' }} to="/shoppinglist">SHOPPING LIST</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={{ textDecoration: 'none' }} to="/login">LOGIN</Link>
                    </li>
                    <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
                    </ul>
            </nav>
        )
    }
}

export default NavBar
