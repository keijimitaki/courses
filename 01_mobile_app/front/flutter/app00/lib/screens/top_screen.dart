import 'package:flutter/material.dart';

import '../dummy_data.dart';
import '../model/food_shop.dart';

class TopScreen extends StatelessWidget {
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
          separatorBuilder: (context, index) => const SizedBox(height: 20),
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
                  'id': foodShopList[index].id.toString(),
                  'name': foodShopList[index].name.toString(),
                  'rating': foodShopList[index].rating.toString(),
                  'genre': foodShopList[index].genre.toString(),
                  'lastUsedDate': foodShopList[index].lastUsedDate.toString(),
                  'memo': foodShopList[index].memo.toString(),
                },
              );
            },
            child: Container(
              decoration: BoxDecoration(
                border: Border(
                  bottom: BorderSide(color: Color(0xFF718355)),
                ),
              ),
              margin: const EdgeInsets.symmetric(horizontal: 8),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Padding(
                      padding: const EdgeInsets.fromLTRB(0, 0, 0, 12),
                      child: Row(
                        children: [
                          Expanded(
                            flex: 4,
                            child: Container(
                              child: Text(
                                foodShopList[index].name,
                                style: const TextStyle(
                                    fontWeight: FontWeight.bold),
                              ),
                            ),
                          ),
                          Expanded(
                            flex: 1,
                            child: Container(
                              child:
                                  Text('点数 : ' + (foodShopList[index].rating!)),
                            ),
                          ),
                        ],
                      )),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(0, 0, 0, 12),
                    child: Row(
                      children: [
                        Expanded(
                          flex: 3,
                          child: Container(
                            child:
                                Text('ジャンル : ' + (foodShopList[index].genre!)),
                          ),
                        ),
                        Expanded(
                          flex: 3,
                          child: Container(
                            child: Text('最終利用 : ' +
                                (foodShopList[index].lastUsedDate!)),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(0, 0, 0, 12),
                    child: Row(children: [
                      Expanded(
                        flex: 1,
                        child: Container(
                          child: Text((foodShopList[index].memo!)),
                        ),
                      ),
                    ]),
                  )
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
