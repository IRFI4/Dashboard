import React from 'react'
import graph from '../assets/images/02.Graph.png'
import percent from '../assets/icons/percent.svg'
import donwload from '../assets/icons/download.svg'
import graph02 from '../assets/images/03.New visitors.png'
import graph03 from '../assets/images/04.Activity.png'
import polygon from '../assets/icons/Polygon 2.svg'
import dots from '../assets/icons/dots.svg'
import heart from '../assets/icons/heart.svg'

export const Dashboard = () => {

    return (
        <div className='board-wrapper'>
            <h1>Dashboard</h1>
            <div className='board-section'>

                <div className='income-block'>

                    <div className='income-block-upper'>
                        <p className='subtitle'>Current income</p>
                        <p>$590.<span className='--primarry-light'>30</span></p>
                        <div className='percent'>
                            <img src={percent} alt="percent-icon" />
                            <span className='--primarry-green'>+0.3%</span>
                        </div>
                    </div>

                    <div className='income-block-lower'>
                        <div className='icon-wrapper'>
                            <img src={donwload} alt="download-icon" />
                        </div>
                        <div className='text-wrapper'>
                            <p>Podcast #4</p>
                            <span className='--primarry-dark'>Report</span>
                        </div>
                    </div>

                </div>

                <div className='earni-block'>
                    <img src={graph} alt="earni" />
                </div>

            </div>
            <div className='board-section'>

                <div className='graph-block'>
                    <img src={graph02} alt="graph" />
                </div>

                <div className='graph-block'>
                    <img src={graph03} alt="graph" />
                </div>

            </div>
            <div className='product-section'>

                <div className='title-wrapper'>
                    <p>Products</p>
                    <div className='sort-by-block'>
                        <span className='--primarry-dark'>Sort by:</span>
                        <p>Most popular</p>
                        <img src={polygon} alt="options-icon" />
                    </div>
                </div>

                <div className='products-block'>

                    <div className='product-item'>
                        <input id='podcast01' name='item1' type="checkbox" checked />
                        <div className='custom-checkbox'></div>
                        <label htmlFor="podcast01">
                            <div className='product-wrapper'>
                                <div className='image-wrapper'></div>
                                <div className='text-wrapper'>
                                    <p>Podcast #4 "Talking about basic of...</p>
                                    <span className='--primarry-dark'>John Dean, Arlene McCoy</span>
                                </div>
                            </div>
                            <div className='date-wrapper'>
                                <span className='--primarry-dark'>May 14, 2020</span>
                                <span className='--primarry-dark'>1:30:43</span>
                            </div>
                            <div className='icon-wrapper'>
                                <img src={heart} alt="like-icon" className='heart-icon' />
                                <img src={dots} alt="details-icon" className='details-icon' />
                            </div>
                        </label>
                    </div>

                    <div className='product-item'>
                        <input id='podcast02' name='item2' type="checkbox" />
                        <div className='custom-checkbox'></div>
                        <label htmlFor="podcast02">
                            <div className='product-wrapper'>
                                <div className='image-wrapper'></div>
                                <div className='text-wrapper'>
                                    <p>Podcast #4 "Talking about basic of...</p>
                                    <span className='--primarry-dark'>John Dean, Arlene McCoy</span>
                                </div>
                            </div>
                            <div className='date-wrapper'>
                                <span className='--primarry-dark'>May 14, 2020</span>
                                <span className='--primarry-dark'>1:30:43</span>
                            </div>
                            <div className='icon-wrapper'>
                                <img src={heart} alt="like-icon" className='heart-icon' />
                                <img src={dots} alt="details-icon" className='details-icon' />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

