import 'package:flutter/material.dart';

class FoodShop {
  final String id;
  final String name;
  final String? genre;
  final String? lastUsedDate;
  final String? rating;
  final String? memo;

  FoodShop({
    required this.id,
    required this.name,
    this.genre,
    this.lastUsedDate,
    this.rating,
    this.memo,
  });
}
