import React from "react";
import './index.css';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
//https://tomchentw.github.io/react-google-maps/

const KMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCeeOtC3Zh0EW093qKeViAIuQb0zQPFeTM&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100px` }} />,
      containerElement: <div style={{ height: ` 80vh`, width: '100%'}} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{lat: 61.183635, lng: 28.782548}}
    >
      {props.isMarkerShown && <Marker position={{lat: 61.183635, lng: 28.782548}} onClick={props.onMarkerClick} />}
    </GoogleMap>
  )

class Location extends React.Component {

    constructor(props){
        super(props);

        this.state = { 
            isMarkerShown: true
        };
    }

    render(){

        return (
            <div className="Section Location">
            <h2>Imatran Kalastuspuistossa</h2>
                <KMapComponent
                    isMarkerShown={this.state.isMarkerShown}>
                </KMapComponent>
            </div>
        );
    }
}

export default Location;
