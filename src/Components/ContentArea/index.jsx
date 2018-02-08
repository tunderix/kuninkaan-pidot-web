import React from "react";
import './index.css';

import Location from "../Location";
import Time from "../Time";
import Contents from "../Contents";
import Contact from "../Contact";
import Gallery from "../Gallery";
import Description from "../Description";

class ContentArea extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { deadline: 'May, 4, 2018' };
   }

    render(){
        return (
            <div className="Content-Area">
                <Contents/>
                <Time deadline={ this.state.deadline }/>
                <Description/>
                <Gallery/>
                <Location/>
                <Contact/>
            </div>
        );
    }
}

export default ContentArea;