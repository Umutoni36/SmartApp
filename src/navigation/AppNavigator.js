import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LightSensor from '../components/LightSensor';
import MotionDetector from '../components/MotionDetector';
import LocationTracker from '../components/LocationTracker';
import Notifications from '../components/Notifications';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LightSensor">
                <Stack.Screen name="LightSensor" component={LightSensor} />
                <Stack.Screen name="MotionDetector" component={MotionDetector} />
                <Stack.Screen name="LocationTracker" component={LocationTracker} />
                <Stack.Screen name="Notifications" component={Notifications} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
