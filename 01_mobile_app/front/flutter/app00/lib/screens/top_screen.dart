import 'package:flutter/material.dart';

import '../dummy_data.dart';

class TopScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Top'),
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
