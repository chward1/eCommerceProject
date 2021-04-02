
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import React from 'react';
import lavenderField from '../images/lavenderField.jpeg';
import mountainsThroughLeaves from '../images/mountainsThroughLeaves.jpg'
import oceanGrass from '../images/oceanGrass.jpeg'
import oceanMoon from '../images/oceanMoon.jpeg'
import oceanShore from '../images/oceanShore.jpeg'
import pointReyes from '../images/pointReyes.jpeg'
import russianRiver from '../images/russianRiver.jpeg'
import sandDunes from '../images/sandDunes.jpeg'
import waterfall from '../images/waterfall.jpeg'
import header from '../images/russianRiverHeader.jpeg'
import '../styles/style.css'



function Home() {
    return (

        <React.Fragment>
            <div>
                <header>
                    <div>
                        <div>
                            <img className="img-fluid" id="header" src={header} alt="" />
                            <div id='banner-container'>
                                <h1 className="display-5 fw-bold text-center" id='brand'>AJ Ward Photography</h1>
                                <p className="lead mb-4" id='header-quote'>"The earth is art, the photographer is only a witness." <br />-Yann Arthus-Bertrand, Earth from Above</p>
                                <div className="">
                                    <a href="#photo-shop-container"><button type="button" className="btn btn-primary btn-lg mr-2">Shop prints</button></a>
                                    <a href="#about-artist-title"><button type="button" className="btn btn-outline-light btn-lg">About artist</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <body>
                    <div className="container" id='photo-shop-container'>
                        <h2 className='print-shop'>Print Shop</h2>
                        <h6 className='print-shop'>Show your support for a northern california artist and give the gift of landscape photography.</h6>
                        <hr></hr>

                        <div className="row">
                            <div className="col-md-4" id="product">
                                <a href="#" className="product-link">
                                    <img className="img-fluid photo-shop" src={russianRiver} alt="woman looking out over the Russian River from lookout" />
                                    <div className="product-description">
                                        <p>Russian River Lookout</p>
                                        <p>$10.00</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4" id="product">
                                <a href="#" className="product-link">
                                    <img className="img-fluid photo-shop" src={sandDunes} alt="man walking up large sand dune with view of mountains in the distance" />
                                    <div className="product-description">
                                        <p>Colorado Sand Dunes</p>
                                        <p>$10.00</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#" className="product-link" id="product">
                                    <img className="img-fluid photo-shop" src={oceanGrass} alt="ocean shore view through beach grass" />
                                    <div className="product-description">
                                        <p>Ocean Grass</p>
                                        <p>$10.00</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <a href="#" className="product-link" id="product">
                                    <img className="col-md-4 img-fluid photo-shop" src={oceanShore} alt="Ocean shore view from above" />
                                    <div className="product-description">
                                        <p>Ocean Shore</p>
                                        <p>$10.00</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#" className="product-link" id="product">
                                    <img className="col-md-4 img-fluid photo-shop" src={lavenderField} alt="Lavender field with view of Mount Hood" />
                                    <div className="product-description">
                                        <p>Lavender Fields</p>
                                        <p>$10.00</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#" className="product-link" id="product">
                                    <img className="col-md-4 img-fluid photo-shop" src={oceanMoon} alt="Ocean shore at night with a full moon" />
                                    <div className="product-description">
                                        <p>Ocean Moon</p>
                                        <p>$10.00</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <a href="#" className="product-link" id="product">
                                    <img className="col-md-4 img-fluid photo-shop" src={mountainsThroughLeaves} alt="Snowy capped mountains surrounded my trees" />
                                    <div className="product-description">
                                        <p>Mountains Through Leaves</p>
                                        <p>$10.00</p>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4">

                                <a href="#" className="product-link">
                                    <img className="col-md-4 img-fluid photo-shop" src={waterfall} alt="Waterfall from below" />
                                    <div className="product-description">
                                        <p>Waterfall</p>
                                        <p>$10.00</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#" className="product-link" id="product">
                                    <img className="col-md-4 img-fluid photo-shop" src={pointReyes} alt="Old rusty boat washed up on shore" />
                                    <div className="product-description">
                                        <p>Rusty Point Reyes</p>
                                        <p>$10.00</p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                    <hr></hr>
                    <div className='container'>
                        <h2 className='display-5 fw-bold text-center p-4' id="about-artist-title">About the Artist</h2>
                        <p className='about' id="about-description p-4 m-4">AJ hails from a small town just outside of Kansas City, MO. He grew up playing in the woods and appreciating every moment he had exploring the outdoors. Now he collects views all over the world and his own backyard on the northern California coast.</p>
                    </div>

                </body >
            </div >

        </ React.Fragment >

    );
}

export default Home;
