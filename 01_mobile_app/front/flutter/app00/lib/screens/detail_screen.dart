import 'package:flutter/material.dart';

import '../dummy_data.dart';

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final routeArgs =
        ModalRoute.of(context)?.settings.arguments as Map<String, String>;

    // final name = routeArgs['name'];
    // final shopName = routeArgs['shopName'];
    final id = routeArgs['id'];

    return Scaffold(
        appBar: AppBar(
          title: Text('Detail - $id'),
          backgroundColor: Color(0xFF718355),
        ),
        body: Table(
          border: TableBorder.all(),
          defaultVerticalAlignment: TableCellVerticalAlignment.middle,
          children: DUMMY_DATA
              .map(
                (data) => TableRow(
                  children: <Widget>[
                    Container(
                      height: 32,
                      width: 128,
                      color: Colors.blueGrey,
                      child: Text(data.id),
                    ),
                  ],
                ),
              )
              .toList(),
        ));
  }
}
