import 'package:flutter/material.dart';

class DeliveryFood {
  final String id;
  final String name;
  final String? genre;
  final String shopName;
  final String? memo;
  final num? raniking;
  final String? imageUrl;

  DeliveryFood(
      {required this.id,
      required this.name,
      this.genre,
      required this.shopName,
      this.memo,
      this.raniking,
      this.imageUrl});
}
