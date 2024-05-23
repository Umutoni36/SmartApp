// src/components/LocationTracker.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const LocationTracker = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });

    useEffect(() => {
        Geolocation.watchPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => {
                console.log(error);
            },
            { enableHighAccuracy: true, distanceFilter: 0, interval: 1000 }
        );

        return () => {
            Geolocation.stopObserving();
        };
    }, []);

    return (
        <View>
            <Text>Location:</Text>
            <Text>Latitude: {location.latitude}</Text>
            <Text>Longitude: {location.longitude}</Text>
        </View>
    );
};

export default LocationTracker;
