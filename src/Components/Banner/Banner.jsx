import React, {useContext} from 'react';
import './Banner.css';
import { BsArrowUp } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { covidDataContext } from '../../Context/CovidData';


const Banner = () => {

    const {indiaStatus} = useContext(covidDataContext);

    console.log(indiaStatus);

    return (
        <div className="banner-main-wrapper">
            <div className="banner-wrapper">
                <div className="banner-data">
                    <p className="sub-title">lets track the covid-19 virus</p>
                    <h2 className="state-name">kerala</h2>
                    <p className="banner-desc">Total Covid cases reported</p>
                    
                </div>
            </div>

            <div className="cards-wrapper">
                <div className="cards">
                    <div className="card total">
                        <p className="card-name">TOTAL</p>
                        <h1 className="case-number">{indiaStatus.total}</h1>
                        <div className="todays">
                            <IconContext.Provider value={{size:"24px", color:""}}>
                                <BsArrowUp />
                            </IconContext.Provider>
                            <p className="today-update">21</p>
                        </div>
                        
                    </div>
                    <div className="card active">
                        <p className="card-name">ACTIVE CASES</p>
                        <h1 className="case-number">100</h1>
                        <div className="todays">
                            <IconContext.Provider value={{size:"24px", color:""}}>
                                <BsArrowUp />
                            </IconContext.Provider>
                            <p className="today-update">21</p>
                        </div>
                    </div>
                    <div className="card recoverd">
                        <p className="card-name">RECOVERD</p>
                        <h1 className="case-number">110</h1>
                        <div className="todays">
                            <IconContext.Provider value={{size:"24px", color:""}}>
                                <BsArrowUp />
                            </IconContext.Provider>
                            <p className="today-update">21</p>
                        </div>
                    </div>
                    <div className="card dead">
                        <p className="card-name">DEAD</p>
                        <h1 className="case-number">100</h1>
                        <div className="todays">
                            <IconContext.Provider value={{size:"24px", color:""}}>
                                <BsArrowUp />
                            </IconContext.Provider>
                            <p className="today-update">21</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
