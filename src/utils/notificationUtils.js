// src/utils/notificationUtils.js
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-community/async-storage';

export const configurePushNotifications = () => {
    PushNotification.configure({
        onNotification: function (notification) {
            console.log('NOTIFICATION:', notification);
        },
        requestPermissions: Platform.OS === 'ios',
    });
};

export const sendNotification = (title, message) => {
    PushNotification.localNotification({
        title,
        message,
    });
};

export const saveNotification = async (notification) => {
    const existingNotifications = await AsyncStorage.getItem('notifications');
    const notifications = existingNotifications ? JSON.parse(existingNotifications) : [];
    notifications.push(notification);
    await AsyncStorage.setItem('notifications', JSON.stringify(notifications));
};
