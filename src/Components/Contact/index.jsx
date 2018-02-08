import React from "react";
import './index.css';
import {SocialIcons, SocialIcon} from "react-social-icons";
import ContactForm from "./ContactForm"
import Paper from 'material-ui/Paper';


const style = {
    backgroundColor: 'beige',
    height: 300,
    width: 500,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };

class Contact extends React.Component {
    render(){
        var urls = [
            'http://jaketrent.com',
            'http://twitter.com/jaketrent',
            'http://linkedin.com/in/jaketrent',
            'http://www.pinterest.com/jaketrent/artsy-fartsy/'
          ];
        return (
            <div className="Section">
                <h2>Haluatko ottaa yhteyttä?</h2>

                <Paper style={style} zDepth={4}>
                    <ContactForm/>
                    <div className="SocialMedia">
                        <SocialIcon network="facebook" style={{ height: 50, width: 50 }} className="SocialButton" />
                        <SocialIcon network="twitter" style={{ height: 50, width: 50 }} className="SocialButton" />
                        <SocialIcon network="pinterest" style={{ height: 50, width: 50 }} className="SocialButton" />
                    </div>
                </Paper>
                
            </div>
        );
    }
}

export default Contact;
