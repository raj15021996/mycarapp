import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import ArrowImg from '../docs/chevron-small.svg'
import Slider from "react-slick";
import data from './cars.json'
import '../style.css';
import CarLearn from './CarLearn';
export default function CarCardUI() {
    const [searchTerm, setSearchTerm] = useState("");
    const [id, setId] = useState();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="templateContainer">
                <div className="searchInput_Container">
                    <input id="searchInput" type="text" placeholder="Search here..."
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }} />
                </div>
                <div className="template_Container">
                    <Slider {...settings} >

                        {
                            data
                                .filter((val) => {
                                    if (searchTerm == "") {
                                        return val;
                                    } else if (val.bodyType.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val;
                                    }
                                })
                                .map((val) => {
                                    return (
                                        <div className="card-item">
                                            <div className="card-inner" key={val.id}>
                                                <p className='bodyType'>{val.bodyType}</p>
                                                <div className='modalDetails'>
                                                    <h5>{val.modelName}</h5>
                                                    <p className='modalType'>{val.modelType}</p>
                                                </div>
                                                <div className="card-top">
                                                    <img src={process.env.PUBLIC_URL + val.imageUrl} alt={val.modelName} />
                                                </div>
                                                <div className="card-bottom">
                                                    <div className="card-info">
                                                        <Link className='link' to="/learn">
                                                            <div className='inner-container'>
                                                                <div>
                                                                    <p className='para'>Learn</p>
                                                                </div>
                                                                <div>
                                                                    <img className='arrowImg' src={ArrowImg} alt='img' />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="card-Shop">
                                                        <a className='link' href={val.url}>
                                                            <div className='inner-container'>
                                                                <div >
                                                                    <p className='para'>Shop</p>
                                                                </div>
                                                                <div>
                                                                    <img className='arrowImg' src={ArrowImg} alt='img' />
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    )
                                })
                        }

                    </Slider>
                </div>
            </div>
        </>
    )
}
