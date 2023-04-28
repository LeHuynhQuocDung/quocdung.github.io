import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fw-bold fs-4 py-3 shadow-sm bg-white">
                <NavLink className="navbar-brand ms-5" to="/">E-SHOP</NavLink>
                <button className="navbar-toggler"
                    type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link active" to="/">
                                Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">
                                Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contract">
                                Contract</NavLink>
                        </li>

                    </ul>
                    <div className="buttons">
                        <NavLink to="/login" className="btn btn-outline-dark">
                            <i className="fa fa-sign-in me-1"></i>Login</NavLink>
                    </div>
                    <div className="buttons">
                        <NavLink to="/register" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-user-plus me-1"></i>Resigter</NavLink>
                    </div>
                    <div className="buttons">
                        <NavLink to="/cart" className="btn btn-outline-dark ms-2 me-5">
                            <i className="fa fa-shopping-cart me-2"></i>Cart (
                                {state.length}
                            )</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
