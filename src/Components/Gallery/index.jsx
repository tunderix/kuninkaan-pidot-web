import React from "react";
import './index.css';
var Carousel = require('nuka-carousel');
class Gallery extends React.Component {
    

  
    myFunc1() {
    }  
    myFunc2() {
    }  
    myFunc3() {
    }
    render() {
        const images = ['../../../src/Images/bg1.jpg', '../../../src/Images/bg2.jpg', '../../../src/Images/bg3.jpg'];
        return(
            <div className="Section">
                    <Carousel>
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
                    </Carousel>
            </div>
        );
    }
    
}

export default Gallery;
