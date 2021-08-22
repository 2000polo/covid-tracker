import React,{ useState } from 'react';
import './Footer.css';
import { RiVirusLine, RiHeartPulseLine } from 'react-icons/ri';
import { AiOutlineGlobal } from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Footer = () => {

    const [isVirus, setIsVirus] = useState(true);
    const [isGlobal, setIsGlobal] = useState(false);
    const [isCare, setIsCare] = useState(false);

    const isVirusHandler = () => {
        setIsVirus(true);
        setIsGlobal(false);
        setIsCare(false);
    }

    const isGlobalHandler = () => {
        setIsGlobal(true);
        setIsVirus(false);
        setIsCare(false);
    }
    
    const isCareHandler = () => {
        setIsCare(true);
        setIsVirus(false);
        setIsGlobal(false);
    }

    return (
        <div className="footer-main-wrapper">
            <footer>
                <div onClick={isVirusHandler}
                    className={isVirus ? "active-icn" :  "icn" }>
                    <IconContext.Provider value={{size:"27px", color:""}} >
                        <RiVirusLine />
                    </IconContext.Provider>
                    
                </div>
                <div onClick={isGlobalHandler}
                    className= { isGlobal ? "active-icn" : "icn"  } >
                    <IconContext.Provider value={{size:"27px", color:""}} >
                        <AiOutlineGlobal/>
                    </IconContext.Provider>
                </div>
                <div onClick={isCareHandler} 
                    value="virus" 
                    className= { isCare ? "active-icn" : "icn" } >
                    <IconContext.Provider value={{size:"27px", color:""}} >
                        <RiHeartPulseLine />
                    </IconContext.Provider>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
