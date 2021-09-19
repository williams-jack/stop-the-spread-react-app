import React from "react";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/status">Status</Link>
                </li>
                <li>
                    <Link to="/history">History</Link>
                </li>
            </ul>
        </div>
    );
};
export default NavbarComponent;
