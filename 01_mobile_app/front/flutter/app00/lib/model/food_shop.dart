import 'package:flutter/material.dart';

class FoodShop {
  final String id;
  final String name;
  final String? genre;
  final String? lastUsed;
  final num? rating;
  final String? memo;

  FoodShop({
    required this.id,
    required this.name,
    this.genre,
    this.lastUsed,
    this.rating,
    this.memo,
  });
}
