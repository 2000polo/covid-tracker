import './App.css';
import { useEffect, useContext, useState } from 'react';
import { covidDataContext } from './Context/CovidData';
import View from './Pages/View/View';
import axios from 'axios'
import { HashRouter as Router, Route } from 'react-router-dom';
import CovidCases from './Pages/CovidCases/CovidCases';
import ViewCont from './Context/ViewCont';

function App() {

  const {setIndiaStatus, setCovidData} = useContext(covidDataContext);
  const [data, setData] = useState({
    states: []
  });

  useEffect(() => {
      axios.get('https://api.rootnet.in/covid19-in/stats/latest').then(response =>{
          console.log(response.data.data.summary);
          // setData(response => ({ ...data, dta: response.data}));
          setCovidData(response.data.data.regional);
          setIndiaStatus(response.data.data.summary);
      })
  }, []);

  return (
    <div className="App">
        
          <Router >
            <ViewCont >
              <Route exact path='/' >
                <CovidCases />
              </Route>
              <Route exact path='/view' >
                <View />
              </Route>
            </ViewCont>
          </Router>
        
    </div>
  );
}

export default App;
