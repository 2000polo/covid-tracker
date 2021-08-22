import { useState, createContext} from "react";

export const viewDataContext = createContext(null);

function ViewCont({children}) {

    const [stateView, setStateView] = useState([])

    return (
        <viewDataContext.Provider value={{stateView, setStateView}}>
            {children}
        </viewDataContext.Provider>
    )
}

export default ViewCont;
