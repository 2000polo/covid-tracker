import React,{ useContext } from 'react';
import Header from '../../Components/Header/Header';
import Banner1 from '../../Components/Banner1/Banner1';
import Footer from '../../Components/Footer/Footer';
import LongCard from '../../Components/LongCard/LongCard';
import { viewDataContext } from '../../Context/ViewCont';

const View = () => {

    const { stateView } = useContext(viewDataContext);

    return (
        <div className="view-page">
            <Header />
            <Banner1 stateview={stateView}/>
            <Footer />
            <LongCard />
        </div>
    )
}

export default View;