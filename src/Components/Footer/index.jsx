import React from "react";
import './index.css';
import Plx from 'react-plx';

class Footer extends React.Component {

    constructor(props){
        super(props);

        const parallaxData = [
            {
              start: 0,
              end: 3000,
              properties: [
                {
                  startValue: 0,
                  endValue: 0,
                  property: "translateY"
                }
              ]
            }
        ];
          
        const styles = {
            height: 40,
            width: "100%",
            lineHeight: "40px",
            textAlign: "center",
            color: "#fff",
            bottom: 0,
            position: "fixed",
            fontFamily: "Helvetica, Arial, sans-serif"
            
        };

        this.state = { 
            parallaxData: parallaxData,
            styles: styles
        };
    }

    render(){
        const parallaxData = this.state.parallaxData;
        const styles = this.state.styles;
        return (
            <Plx
                parallaxData={ parallaxData }
                style={styles}
            >
                
            </Plx>
        );
    }
}

export default Footer;
