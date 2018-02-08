import React from "react";
import './index.css';
import Paper from 'material-ui/Paper';


const style = {
    backgroundColor: 'beige',
    marginLeft: '40px',
    marginRight: '40px',
    paddingLeft: '40px',
    paddingRight: '40px',
    textAlign: 'center',
    display: 'inline-block'
  };

class Description extends React.Component {
    
    render() {
        const kuvaus = "Imatralla järjestetään kolmatta kertaa keskiaikateemainen tapahtuma, jossa on ripaus miekkoja ja magiaa. Luvassa on markkinahumua, ritareita kiiltävissä haarniskoissaan, taistelunäytöksiä ja ainutkertainen lohikäärmeen kohtaamiskoulu. Kaiken tämän sitoo yhteen jännittävä tarina, joka herättää tapahtuman henkiin. Tule kokemaan ja näkemään juonittelua, salaperäisiä hahmoja, tanssia, laulua ja sankareita toimissaan. Kuninkaan pitoihin on kutsuttu koko kansa, ja tekemistä sekä kokemista on aina perheen pienimmistä vanhimmille. Tässä tapahtumassa asiakas voi olla joko katsoja tai osallistuja valintansa mukaan.";
        return(
            <div className="SectDesc">
                <Paper style={style} zDepth={4}>
                    <p>{kuvaus}</p>
                </Paper>
            </div>
        );
    }
    
}

export default Description;
