import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/navbar.css";
const NavbarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark app-navbar">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    StopTheSpread
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/status" className="nav-link">
                                Status
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/history" className="nav-link">
                                History
                            </Link>
                        </li>
                    </ul>
                    <button className="btn btn-danger">Logout</button>
                </div>
            </div>
        </nav>
    );
};
export default NavbarComponent;
