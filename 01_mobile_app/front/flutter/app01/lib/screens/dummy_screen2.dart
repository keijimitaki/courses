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
        title: const Text('DummyScree n2'),
      ),
      body: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          ElevatedButton(
            onPressed: null,
            child: const Text('Disabled'),
          ),
          const SizedBox(height: 30),
          ElevatedButton(
            onPressed: () {
              Navigator.of(context).pushNamed(
                '/top',
                arguments: {
                  'id': 'param-id',
                  'title': 'param-title',
                },
              );
            },
            child: const Text('トップ画面へ'),
          ),
        ],
      ),
    );
  }
}
