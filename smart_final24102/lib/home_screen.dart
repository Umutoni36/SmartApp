import 'package:flutter/material.dart';
import 'light_sensor.dart';
import 'motion_detection.dart';
import 'location_tracking.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _currentIndex = 0;
  final List<Widget> _children = [
    LightSensorPage(),
    MotionDetectionPage(),
    LocationTrackingPage()
  ];

  void onTabTapped(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Smart Home Monitoring'),
      ),
      body: _children[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        onTap: onTabTapped,
        currentIndex: _currentIndex,
        items: [
          BottomNavigationBarItem(
            icon: new Icon(Icons.lightbulb),
            label: 'Light Sensor',
          ),
          BottomNavigationBarItem(
            icon: new Icon(Icons.motion_photos_on),
            label: 'Motion Detection',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.location_on),
            label: 'Location Tracking',
          )
        ],
      ),
    );
  }
}
