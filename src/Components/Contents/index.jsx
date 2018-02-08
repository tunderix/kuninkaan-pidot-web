import React from "react";
import './index.css';
import Img from 'react-image'
import logo from '../../Images/direction_arrow.png'
import kpLogo from '../../Images/mv-kplogo.svg'



class Contents extends React.Component {
    
    render(){
        return (
            <div className="Section">
                <img src={kpLogo} className="kpLogo" alt="Kuninkaan Pidot"/>
                <h1 className="fpText">Kuninkaän Pidot 2018</h1>
                <h4 className="fpText">- kolmas näytös: Lohikäärmeen vuosi -</h4>
                <h4 className="fpText">15.7.1998</h4>
                <div className="GoDownBox">
                    <p>Rullaappa alas!</p>
                    <img src={logo} alt="Nuoli"/>
                </div>
                
            </div>
        );
    }
}

export default Contents;