package com.example.app00.model

import android.graphics.Color
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Icon
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp

sealed class DrawerMenuData(

    val icon: ImageVector? = null,
    val title: String? = null,
    val isDivider: Boolean = false,
    val isHeader: Boolean = false,

    ){


    object AllInboxes: DrawerMenuData(
        icon = Icons.Outlined.Menu,
        title = "All inboxes"

    )
    object Divider: DrawerMenuData(
        isDivider = true
    )
    object HeaderOne: DrawerMenuData(
        isHeader = true,
        title = "ALL LABELS"
    )

    object Primary: DrawerMenuData(
        icon = Icons.Outlined.Email,
        title = "Primary"
    )
    object Social: DrawerMenuData(
        icon = Icons.Outlined.Person,
        title = "Social"
    )

    object AccountBox: DrawerMenuData(
        icon = Icons.Outlined.AccountBox,
        title = "AccountBox"
    )
    object Build: DrawerMenuData(
        icon = Icons.Outlined.Build,
        title = "Build"
    )
    object Create: DrawerMenuData(
        icon = Icons.Outlined.Create,
        title = "Create"
    )
    object Face: DrawerMenuData(
        icon = Icons.Outlined.Face,
        title = "Face"
    )
    object Back: DrawerMenuData(
        icon = Icons.Outlined.ArrowBack,
        title = "ArrowBack"
    )


}
