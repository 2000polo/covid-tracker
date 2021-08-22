import React, { useContext } from 'react';
import { covidDataContext } from '../../Context/CovidData';
import { viewDataContext } from '../../Context/ViewCont';
import { useHistory } from 'react-router';
import './StateCard.css';


const StateCard = () => {

    const { covidData } = useContext(covidDataContext);
    const { setStateView } = useContext(viewDataContext)

    const history = useHistory()

    console.log(covidData);

    const viewHandler = (obj) =>{
        history.push('/view');
        console.log(obj.loc);
        setStateView(obj);
    }


    return (
        <div className="state-card-main-wrapper">
            <h3 className="state-head">
                Check state wise!
            </h3>
            <div className="state-card-grid">


                    {   
                        covidData.map(obj=>{
                            return(
                                <div onClick={()=>viewHandler(obj)} className="state-card">
                                    <p className="statename">
                                        {obj.loc}
                                    </p>
                                </div>
                            )
                        })
                        
                    }




                {/* <div className="state-card">
                    <p className="statename">
                        State Name
                    </p>
                </div>
                <div className="state-card">
                    <p className="statename">
                        State Name
                    </p>
                </div>
                <div className="state-card">
                    <p className="statename">
                        State Name
                    </p>
                </div>
                <div className="state-card">
                    <p className="statename">
                        State Name
                    </p>
                </div>
                <div className="state-card">
                    <p className="statename">
                        State Name
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default StateCard;
