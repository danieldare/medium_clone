import React from 'react';
import "./Header.scss";
import UserImg from "../../user-img.png";

const Header = () => {
    return (
        <section className="Header-container">
            <div className="Header">
                <div className="Header__nav-title">MediumClone</div>
                <div className="Header__nav-right-content">
                    <div className="search_btn">search</div>
                    <div className="social-btn">Facebook</div>
                    <div className="btn-container">
                        <a href="/" className="btn--white">Contact</a>
                    </div>
                    <div className="user-image">
                        <img src={UserImg} alt="img" width="25" height="25" />
                    </div>
                </div>
            </div>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item"><a href="/" className="nav-link">home</a></li>
                    <li className="nav-item"> <a href="/" className="nav-link">categories</a></li>
                    <li className="nav-item"> <a href="/" className="nav-link">typography</a></li>
                    <li className="nav-item"> <a href="/" className="nav-link">politics</a></li>
                    <li className="nav-item"> <a href="/" className="nav-link">health</a></li>
                    <li className="nav-item"> <a href="/" className="nav-link">design</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">startups</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">culture</a></li>
                    <li className="nav-item"> <a href="/" className="nav-link">contact</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">more...</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Header;
