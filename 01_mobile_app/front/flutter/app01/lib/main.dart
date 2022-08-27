import 'package:flutter/material.dart';

// import './screens/top_screen.dart';
import 'screens/tabs_screen.dart';
import 'screens/dummy_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      // home: TopScreen(),
      initialRoute: '/', // default is '/'
      routes: {
        '/': (ctx) => TabsScreen(),
        '/dummy': (ctx) => DummyScreen(),
      },
    );
  }
}
