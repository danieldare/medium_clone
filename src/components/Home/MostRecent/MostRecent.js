import React from 'react';
import ContentImg from "../../../editor3.jpg";
import UserImg from "../../../user.jpg";
import "./MostRecent.scss";

const MostRecent = () => {
    return (
        <div className="MostRecent">
            <div className="container">
            <div className="heading-recent">
                        <span>Most Recent</span>
            </div>
                <div className="content">
                    
                    <div className="cards-container">
                        <div className="card">
                            <div>
                                <h3 className="title">Why Lack of Sleep is So Bad For You</h3>
                                <p className="text">A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease</p>
                                <img src={UserImg} alt="img" className="user-img" /><span className="author-name"> By Segun Oluwadare | 4 min read</span>
                            </div>
                            <div>
                                <img src={ContentImg} alt="img" className="content-img" /> 
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <h3 className="title">Why Lack of Sleep is So Bad For You</h3>
                                <p className="text">A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease</p>
                                <img src={UserImg} alt="img" className="user-img" /><span className="author-name"> By Segun Oluwadare | 4 min read</span>
                            </div>
                            <div>
                                <img src={ContentImg} alt="img" className="content-img" /> 
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <h3 className="title">Why Lack of Sleep is So Bad For You</h3>
                                <p className="text">A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease</p>
                                <img src={UserImg} alt="img" className="user-img" /><span className="author-name"> By Segun Oluwadare | 4 min read</span>
                            </div>
                            <div>
                                <img src={ContentImg} alt="img" className="content-img" /> 
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <h3 className="title">Why Lack of Sleep is So Bad For You</h3>
                                <p className="text">A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease</p>
                                <img src={UserImg} alt="img" className="user-img" /><span className="author-name"> By Segun Oluwadare | 4 min read</span>
                            </div>
                            <div>
                                <img src={ContentImg} alt="img" className="content-img" /> 
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <h3 className="title">Why Lack of Sleep is So Bad For You</h3>
                                <p className="text">A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease</p>
                                <img src={UserImg} alt="img" className="user-img" /><span className="author-name"> By Segun Oluwadare | 4 min read</span>
                            </div>
                            <div>
                                <img src={ContentImg} alt="img" className="content-img" /> 
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <h3 className="title">Why Lack of Sleep is So Bad For You</h3>
                                <p className="text">A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease</p>
                                <img src={UserImg} alt="img" className="user-img" /><span className="author-name"> By Segun Oluwadare | 4 min read</span>
                            </div>
                            <div>
                                <img src={ContentImg} alt="img" className="content-img" /> 
                            </div>
                        </div>
                    </div>
                    

                    <div className="editor-pick">
                        <div className="bg-img-title">
                            Popular Reads
                        </div>
                        <div className="editor-pick-container">
                            <div className="editor-pick-content">
                                <p className="num">01
                                <span className="dash">&nbsp;</span>
                                </p>
                                <div className="text-container" >
                                    <p className="title">The Night My Doorbell Camera Captured a Shooting</p>
                                    <span className="author-name"> By Segun Oluwadare | 4 min read</span>
                                </div>
                            </div>

                            
                            <div className="editor-pick-content">
                                <p className="num">02
                                <span className="dash">&nbsp;</span>
                                </p>
                                <div className="text-container">
                                    <p className="title">The Night My Doorbell Camera Captured a Shooting</p>
                                    <span className="author-name"> By Segun Oluwadare | 4 min read</span>
                                </div>
                            </div>

                            <div className="editor-pick-content">
                                <p className="num">03
                                <span className="dash">&nbsp;</span>
                                </p>
                                <div className="text-container">
                                    <p className="title">The Night My Doorbell Camera Captured a Shooting</p>
                                    <span className="author-name"> By Segun Oluwadare | 4 min read</span>
                                </div>
                            </div>
                            <div className="editor-pick-content">
                                <p className="num">04
                                <span className="dash">&nbsp;</span>
                                </p>
                                <div className="text-container">
                                    <p className="title">The Night My Doorbell Camera Captured a Shooting</p>
                                    <span className="author-name"> By Segun Oluwadare | 4 min read</span>
                                </div>
                            </div>
                            <div className="editor-pick-content">
                                <p className="num">05
                                <span className="dash">&nbsp;</span>
                                
                                </p>
                                <div className="text-container">
                                    <p className="title">The Night My Doorbell Camera Captured a Shooting</p>
                                    <span className="author-name"> By Segun Oluwadare | 4 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default MostRecent
