// src/components/LightSensor.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { SensorManager } from 'react-native-sensor-manager';

const LightSensor = () => {
    const [lightLevel, setLightLevel] = useState(0);

    useEffect(() => {
        SensorManager.startLightSensor(100); // Fetch data every 100ms

        const subscription = SensorManager.onLightSensor((data) => {
            setLightLevel(data.light);
        });

        return () => {
            SensorManager.stopLightSensor();
        };
    }, []);

    return (
        <View>
            <Text>Ambient Light Level: {lightLevel} lx</Text>
        </View>
    );
};

export default LightSensor;
