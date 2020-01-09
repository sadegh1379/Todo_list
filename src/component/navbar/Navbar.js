import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <a className="navbar-brand" href="#"><span className="fa  fa-shopping-bag"></span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="fa fa-home"></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                    </ul>
                    {/* <form class="form-inline float-left my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
                            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
                </nav>
        </div>
    )
}

export default Navbar;
