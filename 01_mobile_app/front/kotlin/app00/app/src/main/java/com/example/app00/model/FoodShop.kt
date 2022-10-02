package com.example.app00.model

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Email
import androidx.compose.ui.graphics.vector.ImageVector

class FoodShop {

    val id: String
    val name: String
    val genre: String?
    val rating: Double?
    val lastUsedDate: String?
    val memo: String?

    constructor(id: String, name: String, genre: String?, lastUsedDate: String?, rating: Double?, memo: String?) {
        this.id = id
        this.name = name
        this.genre = genre
        this.lastUsedDate = lastUsedDate
        this.rating = rating
        this.memo = memo
    }

}