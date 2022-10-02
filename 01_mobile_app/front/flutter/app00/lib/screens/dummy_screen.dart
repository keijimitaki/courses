import 'package:flutter/material.dart';

import '../dummy_data.dart';
import '../model/food_shop.dart';

class DummyScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // final routeArgs =
    //     ModalRoute.of(context)?.settings.arguments as Map<String, String>;

    // final name = routeArgs['name'];
    // final shopName = routeArgs['shopName'];

// https://www.choge-blog.com/programming/flutterlistview-builder-tap/
    List<FoodShop> foodShopList = DUMMY_DATA;

    return Scaffold(
      body: Scrollbar(
        child: ListView.separated(
          padding: const EdgeInsets.all(20),
          separatorBuilder: (context, index) => const SizedBox(height: 16),
          itemCount: foodShopList.length,
          itemBuilder: (context, index) => GestureDetector(
            onTap: () {
              /*タップ処理*/

              // showDialog(
              //     context: context,
              //     builder: (context) => AlertDialog(
              //           content: Text('Tap $index'),
              //         ));

              Navigator.of(context).pushNamed(
                '/detail',
                arguments: {
                  'id': '$index',
                  'title': 'param-title',
                },
              );
            },
            child: Container(
              decoration: BoxDecoration(
                border: Border(
                  bottom: BorderSide(color: Color(0xFF718355)),
                ),
              ),
              margin: const EdgeInsets.all(0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Container(
                      margin: const EdgeInsets.all(8),
                      child: Text('Item ($index + 1)')),
                  Row(
                    children: [
                      Expanded(
                        flex: 3,
                        child: Container(
                          child: Text(foodShopList[index].name),
                        ),
                      ),
                      Expanded(
                        flex: 1,
                        child: Container(
                          child: Text('rating：' +
                              (foodShopList[index].rating == null
                                  ? ' ― '
                                  : foodShopList[index].rating.toString())),
                        ),
                      ),
                    ],
                  ),
                  Text("item3"),
                  Text("item4"),
                  Container(
                    margin: const EdgeInsets.all(10),
                    child: Text(
                      'Item ($index + 1)',
                      style: const TextStyle(
                          fontSize: 12, fontWeight: FontWeight.bold),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
