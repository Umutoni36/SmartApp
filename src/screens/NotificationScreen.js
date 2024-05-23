// src/screens/NotificationScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const NotificationScreen = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const storedNotifications = await AsyncStorage.getItem('notifications');
            if (storedNotifications) {
                setNotifications(JSON.parse(storedNotifications));
            }
        };
        fetchNotifications();
    }, []);

    return (
        <ScrollView>
            <View>
                {notifications.map((notification, index) => (
                    <View key={index}>
                        <Text>{notification.title}</Text>
                        <Text>{notification.message}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default NotificationScreen;
