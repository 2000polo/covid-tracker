import {createContext, useState} from 'react';

export const covidDataContext = createContext(null);

function CovidData ({children}) {

    const [covidData, setCovidData]= useState([]);
    const [indiaStatus, setIndiaStatus] = useState({});

    return (
        <covidDataContext.Provider value={{covidData, setCovidData, indiaStatus, setIndiaStatus}} >
            {children}
        </covidDataContext.Provider>
    )
}

export default CovidData;