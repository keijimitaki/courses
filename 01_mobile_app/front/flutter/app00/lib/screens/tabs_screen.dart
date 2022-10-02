import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../widgets/main_drawer.dart';
// import './favorites_screen.dart';
// import './categories_screen.dart';
import './dummy_screen.dart';
import './top_screen.dart';

class TabsScreen extends StatefulWidget {
  @override
  _TabsScreenState createState() => _TabsScreenState();
}

class _TabsScreenState extends State<TabsScreen> {
  final List<Map<String, Object>> _pages = [
    {
      'page': DummyScreen(),
      'title': 'Categories',
    },
    {
      'page': DummyScreen(),
      'title': 'Your Favorite',
    },
  ];
  int _selectedPageIndex = 0;

  void _selectPage(int index) {
    setState(() {
      _selectedPageIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        //title: Text(_pages[_selectedPageIndex]['title']),
        title: const Text('title'),
        backgroundColor: Color(0xFF718355),
        systemOverlayStyle: const SystemUiOverlayStyle(
          statusBarColor: Colors.white,
          statusBarIconBrightness: Brightness.dark,
          statusBarBrightness: Brightness.dark,
        ),
      ),
      drawer: MainDrawer(),
      body: _pages[_selectedPageIndex]['page'] as Widget,
      bottomNavigationBar: BottomNavigationBar(
        onTap: _selectPage,
        //backgroundColor: Theme.of(context).primaryColor,
        unselectedItemColor: Colors.white,
        // selectedItemColor: Theme.of(context).accentColor,
        selectedItemColor: Color(0xFFCFE1B9),
        currentIndex: _selectedPageIndex,
        // type: BottomNavigationBarType.fixed,
        backgroundColor: Color(0xFF718355),
        items: [
          BottomNavigationBarItem(
            //backgroundColor: Theme.of(context).primaryColor,
            icon: Icon(Icons.category),
            label: 'Categories' as String,
            // When the user t
          ),
          BottomNavigationBarItem(
            //backgroundColor: Theme.of(context).primaryColor,
            icon: Icon(Icons.star),
            label: 'Favorites' as String,
          ),
        ],
      ),
    );
  }
}
