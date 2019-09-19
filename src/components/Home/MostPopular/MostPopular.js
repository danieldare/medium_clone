import React from 'react';
import UserImg from '../../../jenny.jpg';
import "./MostPopular.scss";

const MostPopular = () => {
    return (
        <div>
            <div className="MostPopular">
                    <div className="container">
                        <div className="bg">
                            <h2 className="content-title">Most Popular</h2>
                            <div className="bg-content">
                                <h3 className="bg-title">The Science Backed Ways Music Affects Your Brain and Productivity</h3>
                                <p className="bg-text">
                                    Peevish much much before healthy goodness a fractious inept vexedly jeez so jeepers more much yet this much pill human.
                                    And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.
                                 <a href="/" className="read-more"> Read more</a>
                                 </p>
                                <div className="bg-footer">
                                    <img src={UserImg} alt="img" className="user-img" />
                                    <p className="author__details">By <span className="text-purple"> Danielle Oluwadare </span> | 3 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default MostPopular;
