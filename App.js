import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LightSensor from './src/components/LightSensor';
import MotionDetector from './src/components/MotionDetector';
import LocationTracker from './src/components/LocationTracker';
import Notifications from './src/components/Notifications';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Smart Home Monitoring</Text>
            <LightSensor />
            <MotionDetector />
            <LocationTracker />
            <Notifications />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default App;
