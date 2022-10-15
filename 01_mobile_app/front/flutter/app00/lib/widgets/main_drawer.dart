import 'package:flutter/material.dart';

// import '../screens/filters_screen.dart';

class MainDrawer extends StatelessWidget {
  Widget buildListTile(String title, IconData icon, Function tapHandler) {
    return ListTile(
      title: Text(
        title,
        style: TextStyle(
          color: Color(0xFFFFFFFF),
          fontFamily: 'RobotoCondensed',
          fontSize: 18,
        ),
      ),
      onTap: tapHandler as Function(),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Container(
        color: Color(0xFFB5C99A),
        child: Column(
          children: [
            // Container
            //   height: 120,
            //   width: double.infinity,
            //   padding: EdgeInsets.all(20),
            //   alignment: Alignment.centerLeft,
            //   color: Color(0xFFB5C99A),
            //   child: Text(
            //     'Cooking Up!',
            //     style: TextStyle(
            //         fontWeight: FontWeight.w900,
            //         fontSize: 30,
            //         color: Theme.of(context).primaryColor),
            //   ),
            // ),
            SizedBox(
              height: 70,
            ),
            buildListTile('ドロワーメニュー 1', Icons.restaurant, () {
              Navigator.of(context).pushReplacementNamed('/');
            }),
            buildListTile('ドロワーメニュー 2', Icons.restaurant, () {
              Navigator.of(context).pushReplacementNamed('/');
            }),

            buildListTile('ドロワーメニュー 3', Icons.restaurant, () {
              Navigator.of(context).pushReplacementNamed('/');
            }),
          ],
        ),
      ),
    );
  }
}
