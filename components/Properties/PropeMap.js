import React from 'react';
import { GoogleMap, useJsApiLoader, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
    position: 'relative',
    zIndex: 0,
};

const PropeMap = ({ coordinates }) => {
    const data = {
        center: {
            lat: coordinates.lat ? coordinates.lat : 40.7329369,
            lng: coordinates.lng ? coordinates.lng : -73.9392317,
        },
        zoom: 18,
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAch_9Qk6XtqtcrV0eVFVwZ9slv6POKuss',
    });

    return (
        isLoaded && (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={data.center}
                zoom={data.zoom}
            >
                {coordinates.lat ? (
                    <InfoWindow position={data.center}>
                        <div
                            className='pin'
                            style={{ backgroundColor: '#000', padding: 10 }}
                        >
                            <img
                                src='/images/one-stop-logo.png'
                                alt='pin-one'
                                width='143'
                                height='80'
                            />
                        </div>
                    </InfoWindow>
                ) : null}
            </GoogleMap>
        )
    );
};

export default PropeMap;
