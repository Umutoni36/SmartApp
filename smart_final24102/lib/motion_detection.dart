import 'package:flutter/material.dart';
import 'package:sensors_plus/sensors_plus.dart';
import 'notification_service.dart';

class MotionDetectionPage extends StatefulWidget {
  @override
  _MotionDetectionPageState createState() => _MotionDetectionPageState();
}

class _MotionDetectionPageState extends State<MotionDetectionPage> {
  double _threshold = 15.0;
  double _accelX = 0.0, _accelY = 0.0, _accelZ = 0.0;

  @override
  void initState() {
    super.initState();
    accelerometerEvents.listen((AccelerometerEvent event) {
      setState(() {
        _accelX = event.x;
        _accelY = event.y;
        _accelZ = event.z;
      });
      _detectMotion(event);
    });
  }

  void _detectMotion(AccelerometerEvent event) {
    double totalAcceleration = event.x.abs() + event.y.abs() + event.z.abs();
    if (totalAcceleration > _threshold) {
      NotificationService()
          .showNotification('Motion Detected', 'Unexpected motion detected!');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text(
            'Motion Detection',
            style: TextStyle(fontSize: 24),
          ),
          Text('X: $_accelX, Y: $_accelY, Z: $_accelZ'),
          // Additional UI for motion detection settings
        ],
      ),
    );
  }
}
