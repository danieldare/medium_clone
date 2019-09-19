import React from 'react';
import Img1 from "../../editor3.jpg";
import UserImg from "../../user.jpg";
import GuitarImg from "../../guitar.jpg";
import "./Home.scss";
import MostPopular from './MostPopular/MostPopular';
import MostRecent from './MostRecent/MostRecent';

const Home = () => {
    return (
        <div className="Home">
           <div className="banner__container">
               <div className="container">
                    <div className="banner__content">
                        <p className="data_category">MUSIC / 2019 23 October</p>
                        <p className="title">Daniel Lagne - Rock Music rules the west side</p>
                        <p className="author-name">By Segun / 6 min read</p>
                        <a href="/" alt="Read more" className="read-more">Read more</a>
                    </div>
               </div> 
           </div>

                <div className="container">
            <div className="columns">
                
                <div className="column-2">
                    <h3 className="heading-editor"><span>Editor's Choice</span></h3>
                    <div className="editor-section">

                    <div className="card">
                        <div className="card-content">
                            <img src={Img1} alt="img" width="100%" height="250" />
                           
                            <h4 className="card-title">How internet is Becoming a Luxury for the wealthy</h4>
                            <p className="genre">Lifestyle | 2019, 25 March</p>
                            <p className="card-text">And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.</p>
                            <div><img src={UserImg}  alt="img" className="author-img"/><p className="author__details">By <span className="text-purple">Segun Oluwadare </span> | 3 min read</p></div>
                            <p className="date_min"></p>
                        </div>
                    </div>

                    <div className="cards-container">
                        <div className="card-small">
                            <img src={GuitarImg}  alt="img" className="card-sm-img"/>
                            <div className="card-sm-text">
                                <h5 className="card-sm-title">The Night My Doorbell Camera Captured a Shooting</h5>
                                <p className="genre">Lifestyle | 2019, 25 March</p>
                                <p className="author__details">By <span className="text-purple">Segun Oluwadare </span> | 3 min read</p>
                            </div>
                        </div>
                        <div className="card-small">
                            <img src={GuitarImg}  alt="img" className="card-sm-img"/>
                            <div className="card-sm-text">
                                <h5 className="card-sm-title">The Night My Doorbell Camera Captured a Shooting</h5>
                                <p className="genre">Lifestyle | 2019, 25 March</p>
                                <p className="author__details">By <span className="text-purple">Segun Oluwadare </span> | 3 min read</p>
                            </div>
                        </div>

                        <div className="card-small">
                            <img src={GuitarImg}  alt="img" className="card-sm-img"/>
                            <div className="card-sm-text">
                                <h5 className="card-sm-title">The Night My Doorbell Camera Captured a Shooting</h5>
                                <p className="genre">Lifestyle | 2019, 25 March</p>
                                <p className="author__details">By <span className="text-purple">Segun Oluwadare </span> | 3 min read</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="column-1">
                    <h3 className="heading-trending"><span>Trending</span></h3>
                    <div className="trending-container">
                        <div className="trending-content">
                            <p className="trending-num">01
                            <span className="dash">&nbsp;</span>
                            </p>
                            <div className="trending-info">
                                <p className="trending-text">President and the emails. Who will guard the guards?</p>
                                <p className="author__details">By <span className="text-purple">Segun Oluwadare </span> | 3 min read</p>
                            </div>
                        </div>
                        <div className="trending-content">
                            <p className="trending-num">02
                            <span className="dash">&nbsp;</span>
                            </p>
                            <div className="trending-info">
                                <p className="trending-text">President and the emails. Who will guard the guards?</p>
                                <p className="author__details">By <span className="text-purple">Segun Oluwadare </span> | 3 min read</p>
                            </div>
                        </div>
                        <div className="trending-content">
                            <p className="trending-num">03
                            <span className="dash">&nbsp;</span>
                            </p>
                            <div className="trending-info">
                                <p className="trending-text">President and the emails. Who will guard the guards?</p>
                                <p className="author__details">By <span className="text-purple">Segun Oluwadare </span> | 3 min read</p>
                            </div>
                        </div>
                        <div className="trending-content">
                            <p className="trending-num">04
                            <span className="dash">&nbsp;</span>
                            </p>
                            <div className="trending-info">
                                <p className="trending-text">President and the emails. Who will guard the guards?</p>
                                <p className="author__details">By <span className="text-purple">Segun Oluwadare </span> | 3 min read</p>
                            </div>
                        </div>
                        <div className="trending-content">
                            <p className="trending-num">05
                            <span className="dash">&nbsp;</span>
                            </p>
                            <div className="trending-info">
                                <p className="trending-text">President and the emails. Who will guard the guards?</p>
                                <p className="author__details">By <span className="text-purple">Segun Oluwadare </span> | 3 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <MostPopular />
            <MostRecent />
        </div>
    )
}

export default Home;
