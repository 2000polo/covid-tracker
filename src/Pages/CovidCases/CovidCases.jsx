import React from 'react';
import Banner1 from '../../Components/Banner1/Banner1';
import Header from '../../Components/Header/Header';
import StateCard from '../../Components/StateCard/StateCard';
import Footer from '../../Components/Footer/Footer';


const CovidCases = () => {

    return(
        <div className="covidcases-main-wrapper">
            <Header/>
            <Banner1 />
            <StateCard />
            <Footer />
        </div>
    )
}

export default CovidCases;
