import 'package:flutter/material.dart';

import '../dummy_data.dart';
import '../model/food_shop.dart';

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    List<FoodShop> foodShopList = DUMMY_DATA;

    final routeArgs =
        ModalRoute.of(context)?.settings.arguments as Map<String, String>;

    // final name = routeArgs['name'];
    // final shopName = routeArgs['shopName'];
    final id = routeArgs['id'];
    final name = routeArgs['name'];
    final rating = routeArgs['rating'];
    final genre = routeArgs['genre'];
    final lastUsedDate = routeArgs['lastUsedDate'];
    final memo = routeArgs['memo'];

    return Scaffold(
      appBar: AppBar(
        title: Text('DETAIL'),
        backgroundColor: Color(0xFF718355),
      ),
      body: Container(
        padding: const EdgeInsets.all(8),
        margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 80),
        height: 400,
        width: 360,
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 8),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Padding(
                  padding: const EdgeInsets.fromLTRB(0, 0, 0, 20),
                  child: Row(
                    children: [
                      Expanded(
                        flex: 1,
                        child: Container(
                          child: Text(
                            'ID : ',
                            style: const TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold),
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 3,
                        child: Container(
                          child: Text(
                            id.toString(),
                            style: const TextStyle(fontSize: 16),
                          ),
                        ),
                      ),
                    ],
                  )),
              Padding(
                  padding: const EdgeInsets.fromLTRB(0, 0, 0, 20),
                  child: Row(
                    children: [
                      Expanded(
                        flex: 1,
                        child: Container(
                          child: Text(
                            '名前 : ',
                            style: const TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold),
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 3,
                        child: Container(
                          child: Text(
                            name.toString(),
                            style: const TextStyle(fontSize: 16),
                          ),
                        ),
                      ),
                    ],
                  )),
              Padding(
                  padding: const EdgeInsets.fromLTRB(0, 0, 0, 20),
                  child: Row(
                    children: [
                      Expanded(
                        flex: 1,
                        child: Container(
                          child: Text(
                            '点数 : ',
                            style: const TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold),
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 3,
                        child: Container(
                          child: Text(
                            rating.toString(),
                            style: const TextStyle(fontSize: 16),
                          ),
                        ),
                      ),
                    ],
                  )),
              Padding(
                  padding: const EdgeInsets.fromLTRB(0, 0, 0, 20),
                  child: Row(
                    children: [
                      Expanded(
                        flex: 1,
                        child: Container(
                          child: Text(
                            'ジャンル : ',
                            style: const TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold),
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 3,
                        child: Container(
                          child: Text(
                            genre.toString(),
                            style: const TextStyle(fontSize: 16),
                          ),
                        ),
                      ),
                    ],
                  )),
              Padding(
                  padding: const EdgeInsets.fromLTRB(0, 0, 0, 20),
                  child: Row(
                    children: [
                      Expanded(
                        flex: 1,
                        child: Container(
                          child: Text(
                            '最終利用 : ',
                            style: const TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold),
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 3,
                        child: Container(
                          child: Text(
                            lastUsedDate.toString(),
                            style: const TextStyle(fontSize: 16),
                          ),
                        ),
                      ),
                    ],
                  )),
              Padding(
                  padding: const EdgeInsets.fromLTRB(0, 0, 0, 20),
                  child: Row(
                    children: [
                      Expanded(
                        flex: 1,
                        child: Container(
                          height: 100,
                          child: Text(
                            'メモ : ',
                            style: const TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold),
                          ),
                        ),
                      ),
                      Expanded(
                        flex: 3,
                        child: Container(
                          height: 100,
                          child: Text(
                            memo.toString(),
                            style: const TextStyle(fontSize: 16),
                          ),
                        ),
                      ),
                    ],
                  )),
            ],
          ),
        ),
      ),
    );
  }
}
