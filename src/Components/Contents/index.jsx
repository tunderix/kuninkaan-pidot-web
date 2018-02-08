import React from "react";
import './index.css';
import Img from 'react-image'
import logo from '../../Images/direction_arrow.png'
class Contents extends React.Component {
    
    render(){
        return (
            <div className="Section">
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