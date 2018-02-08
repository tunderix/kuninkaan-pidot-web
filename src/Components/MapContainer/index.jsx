import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from "react";

export class MapContainer extends React.Component {
    render() {
        const style = {
            width: '100%',
            height: '300px'
        }

        return (
            <Map 
                google={this.props.google} 
                zoom={14}
                style={style}
                centerAroundCurrentLocation={true}      
                >
        
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
        
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}
