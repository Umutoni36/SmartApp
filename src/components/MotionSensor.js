// src/components/MotionSensor.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { accelerometer } from 'react-native-sensors';

const MotionSensor = () => {
    const [motion, setMotion] = useState({ x: 0, y: 0, z: 0 });

    useEffect(() => {
        const subscription = accelerometer.subscribe(({ x, y, z }) => {
            setMotion({ x, y, z });
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <View>
            <Text>Motion Sensor:</Text>
            <Text>X: {motion.x.toFixed(2)}</Text>
            <Text>Y: {motion.y.toFixed(2)}</Text>
            <Text>Z: {motion.z.toFixed(2)}</Text>
        </View>
    );
};

export default MotionSensor;
