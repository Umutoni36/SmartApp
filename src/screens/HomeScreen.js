// src/screens/HomeScreen.js
import React from 'react';
import { View, ScrollView } from 'react-native';
import LightSensor from '../components/LightSensor';
import MotionSensor from '../components/MotionSensor';
import LocationTracker from '../components/LocationTracker';

const HomeScreen = () => {
    return (
        <ScrollView>
            <View>
                <LightSensor />
                <MotionSensor />
                <LocationTracker />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
