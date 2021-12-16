import React from 'react';
import { GoogleMap, useJsApiLoader, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '700px',
    position: 'relative',
    zIndex: 0,
};

const ContactMap = () => {
    const data = {
        center: {
            lat: 40.7329369,
            lng: -73.9392317,
        },
        zoom: 18,
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: '',
    });

    return (
        isLoaded && (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={data.center}
                zoom={data.zoom}
            >
                <InfoWindow position={data.center}>
                    <div
                        className='pin'
                        style={{ backgroundColor: '#000', padding: 10 }}
                    >
                        <img
                            src='images/one-stop-logo.png'
                            alt='pin-one'
                            width='150px'
                        />
                    </div>
                </InfoWindow>
            </GoogleMap>
        )
    );
};

export default ContactMap;
