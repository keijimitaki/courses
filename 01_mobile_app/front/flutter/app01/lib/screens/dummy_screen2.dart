import 'package:flutter/material.dart';

import '../dummy_data.dart';

class DummyScreen2 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // final routeArgs =
    //     ModalRoute.of(context)?.settings.arguments as Map<String, String>;

    // final name = routeArgs['name'];
    // final shopName = routeArgs['shopName'];

    return Scaffold(
        appBar: AppBar(
          title: const Text('DummyScreen2'),
        ),
        body: const Text('dummy '));
  }
}
