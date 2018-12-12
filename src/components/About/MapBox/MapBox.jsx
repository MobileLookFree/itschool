import React from 'react';
import { YMaps, Map, FullscreenControl, ZoomControl, Placemark, RouteButton, TypeSelector } from 'react-yandex-maps';
import './MapBox.css';

const MapBox = () => {
    return (
        <YMaps>
            <Map className="map" defaultState={{ center: [55.66994798052043, 37.480250279117875], zoom: 12 }}>
                <Placemark geometry={[55.66994798052043, 37.480250279117875]} />
                <FullscreenControl />
                <RouteButton options={{ float: 'left' }} />
                <TypeSelector defaultState={{ expanded: false }} />
                <ZoomControl
                    options={{
                        size: 'small',
                        zoomDuration: 500,
                    }}
                />
            </Map>
        </YMaps>
    );
}

export default MapBox;

