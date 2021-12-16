import React from 'react';
import { GoogleMap, useJsApiLoader, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '500px',
    position: 'relative',
    zIndex: 0,
};

const SmallMap = () => {
    const data = {
        center: {
            lat: 41.5644313,
            lng: -72.896936,
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
                <InfoWindow position={data.center}>
                    <div
                        className='pin'
                        style={{ backgroundColor: '#000', padding: 10 }}
                    >
                        <img
                            src='images/one-stop-logo.png'
                            alt='pin-one'
                            width='99px'
                            height='50px'
                        />
                    </div>
                </InfoWindow>
            </GoogleMap>
        )
    );
};

export default SmallMap;
