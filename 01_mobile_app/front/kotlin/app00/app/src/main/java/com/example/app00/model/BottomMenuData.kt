package com.example.app00.model

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.*
import androidx.compose.ui.graphics.vector.ImageVector

sealed class BottomMenuData(
    val icon: ImageVector,
    val title: String,
    ){

    object Email: BottomMenuData(
        icon = Icons.Outlined.Email,
        title = "Email"
    )
    object Face: BottomMenuData(
        icon = Icons.Outlined.Face,
        title = "Face"
    )

}
