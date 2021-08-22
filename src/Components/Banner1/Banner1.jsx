import React, {useContext} from 'react';
import { covidDataContext } from '../../Context/CovidData';
import './Banner1.css';

const Banner1 = (props) => {

    const { indiaStatus } = useContext(covidDataContext);

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      } 


      console.log(props.stateview);


    return(
        
        <div className="banner1-main-wrapper">
            
            <div className="title-desc-section">
                <p className="banner-desc">
                    Let's find out the covid status!
                </p>
                <h3 className="loc-name">
                    {props.stateview ? props.stateview.loc : "India"}
                </h3>
                <p className="sub-desc-title">
                    Stay Home! Stay Safe!
                </p>
            </div>
            <div className="data-display-section">
                <div className="status-row">
                    <div className="status-card">
                        <p className="status-card-name">
                            Total Cases
                        </p>
                        {
                            props.stateview ? 
                        <p className="covid-case-status">
                            {
                            props.stateview.totalConfirmed && formatNumber(props.stateview.totalConfirmed)}
                        </p> 
                        :
                        <p className="covid-case-status">
                            {
                            indiaStatus.total && formatNumber(indiaStatus.total)}
                        </p> 
                         }
                    </div>
                    <hr className="row-sep" />
                    <div className="status-card">
                        <p className="status-card-name">
                            Confirmed Cases
                        </p>
                        {
                           props.stateview ? 
                           <p className="covid-case-status">
                               {
                               props.stateview.confirmedCasesIndian && formatNumber(props.stateview.confirmedCasesIndian)}
                           </p> 
                           : 
                            <p className="covid-case-status">
                                {indiaStatus.confirmedCasesIndian && formatNumber(indiaStatus.confirmedCasesIndian)}
                            </p>
                        }
                    </div>
                </div>
                
                <div className="sep">
                    <hr className="col-sep" />
                    <hr className="col-sep" />
                </div>
                
                <div className="status-row">
                    <div className="status-card">
                        <p className="status-card-name">
                            Recoverd Cases
                        </p>
                        {
                            props.stateview ? 
                            <p className="covid-case-status">
                                {
                                props.stateview.discharged && formatNumber(props.stateview.discharged)}
                            </p> 
                            : 
                            <p className="covid-case-status">
                                {indiaStatus.discharged && formatNumber(indiaStatus.discharged)}
                            </p>
                        }
                    </div>
                    <hr className="row-sep" />
                    <div className="status-card">
                        <p className="status-card-name">
                            Deaths
                        </p>
                        {
                            props.stateview ? 
                            <p className="covid-case-status">
                                {
                                props.stateview.deaths && formatNumber(props.stateview.deaths)}
                            </p> 
                            : 
                            <p className="covid-case-status">
                            {indiaStatus.deaths && formatNumber(indiaStatus.deaths)}
                            </p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner1;
