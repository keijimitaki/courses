import 'package:flutter/material.dart';

class DeliveryFood {
  final String id;
  final String name;
  final String? genre;
  final String shopName;
  final String? shopUrl;
  final num? rating;
  final String? memo;

  DeliveryFood({
    required this.id,
    required this.name,
    this.genre,
    required this.shopName,
    this.shopUrl,
    this.rating,
    this.memo,
  });
}
