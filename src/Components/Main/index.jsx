import React from "react";
import './index.css';
import Header from "../Header";
import Footer from "../Footer";
import ContentArea from "../ContentArea";
import Plx from 'react-plx';

class Main extends React.Component {
    constructor(props){
        super(props);

        const plxBg1 = [
            {
              start: 0,
              end: 1000,
              properties: [
                {
                  startValue: 0,
                  endValue: 0,
                  property: "translateY"
                },
                {
                  startValue: 0,
                  endValue: 0,
                  property: "translateX"
                },
                {
                  startValue: 1,
                  endValue: 1.3,
                  property: "scale"
                }
              ]
            }
        ];
        const plxBg2 = [
            {
                start: 'self', // starts when plx's element enters the viewport
              end: 0,
              properties: [
                {
                    startValue: 100,
                    endValue: 0,
                    property: "translateY"
                }
              ]
            }
        ];
        
        const styleBg1 = {
            height: "100%",
            width: "100%",
            lineHeight: "40px",
            textAlign: "center",
            color: "#fff",
            top: 0,
            position: "fixed",
        };
        
        const styleBg2 = {
            height: "100%",
            width: "100%",
            color: "#fff"
        };

        this.state = { 
            plxBg1: plxBg1,
            styleBg1: styleBg1,
            plxBg2: plxBg2,
            styleBg2: styleBg2
        };
    }

    render(){
        const plxBg1 = this.state.plxBg1;
        const styleBg1 = this.state.styleBg1;
        const plxBg2 = this.state.plxBg2;
        const styleBg2 = this.state.styleBg2;
        return (
            <div className="Main-Body">
                <div className="Backgrounds">
                    <Plx
                        parallaxData={ plxBg1 }
                        style={styleBg1}
                        className="bg1"
                    >
                    </Plx>
                    <Plx
                        parallaxData={ plxBg2 }
                        style={styleBg2}
                        className="bg2"
                    >
                    </Plx>
                </div>
                <ContentArea/>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default Main;
