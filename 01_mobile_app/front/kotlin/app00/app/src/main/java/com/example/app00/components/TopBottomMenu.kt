package com.example.app00.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Menu
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.app00.App
import com.example.app00.R
import com.example.app00.model.BottomMenuData
import com.example.app00.model.DrawerMenuData
import com.example.app00.ui.theme.App00Theme
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch

@Composable
fun TopBottomMenu() {
    val menuList = listOf(
        BottomMenuData.Email,
        BottomMenuData.Face,
    )


    BottomNavigation(
        backgroundColor = Color(113,131,85 ),
    contentColor = Color(233,245,219),
    elevation = BottomNavigationDefaults.Elevation,
        ){

            menuList.forEach{
                BottomNavigationItem(
                    label = { Text(text = it.title) },
                    alwaysShowLabel = true,
                    selected = false,
                    onClick = { /* TODO */ },
                    icon = { Icon(imageVector = it.icon, contentDescription = it.title) },
            )

        }

    }
}

