import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'notification_service.dart';

class LocationTrackingPage extends StatefulWidget {
  @override
  _LocationTrackingPageState createState() => _LocationTrackingPageState();
}

class _LocationTrackingPageState extends State<LocationTrackingPage> {
  Position? _currentPosition;
  String _currentAddress = '';

  @override
  void initState() {
    super.initState();
    _determinePosition();
  }

  Future<void> _determinePosition() async {
    bool serviceEnabled;
    LocationPermission permission;

    serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      return Future.error('Location services are disabled.');
    }

    permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        return Future.error('Location permissions are denied');
      }
    }

    if (permission == LocationPermission.deniedForever) {
      return Future.error(
          'Location permissions are permanently denied, we cannot request permissions.');
    }

    _currentPosition = await Geolocator.getCurrentPosition();
    _currentAddress =
        'Lat: ${_currentPosition?.latitude}, Lon: ${_currentPosition?.longitude}';
    setState(() {});

    _setGeofence();
  }

  void _setGeofence() {
    // Geofencing logic to trigger notifications
    // Example: if within specific coordinates, trigger a notification
    if (_currentPosition != null) {
      if (_currentPosition!.latitude > 1.0 &&
          _currentPosition!.latitude < 2.0 &&
          _currentPosition!.longitude > 1.0 &&
          _currentPosition!.longitude < 2.0) {
        NotificationService().showNotification(
            'Geofence Alert', 'You have entered the predefined area!');
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text(
            'Location Tracking',
            style: TextStyle(fontSize: 24),
          ),
          if (_currentPosition != null)
            Text('Current Position: $_currentAddress'),
          // Additional UI for location settings
        ],
      ),
    );
  }
}
