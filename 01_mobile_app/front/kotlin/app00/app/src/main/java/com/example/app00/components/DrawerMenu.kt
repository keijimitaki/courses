package com.example.app00.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.ScrollState
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Divider
import androidx.compose.material.Text
import androidx.compose.material.contentColorFor
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.app00.model.DrawerMenuData

@Composable
fun DrawerMenu(scrollState: ScrollState){

    Column(
        Modifier
//            .verticalScroll(scrollState)
            .fillMaxWidth()
            .fillMaxHeight()
            .background(color = Color(181, 201, 154))) {

        Text(text = "ドロワーメニュー 1", fontWeight = FontWeight.Light,
            modifier = Modifier.padding(start = 20.dp, bottom = 20.dp,top=60.dp)
            ,color = Color.White)
        Text(text = "ドロワーメニュー 2", fontWeight = FontWeight.Light,
            modifier = Modifier.padding(start = 20.dp, bottom = 20.dp,top=20.dp)
            ,color = Color.White)
        Text(text = "ドロワーメニュー 3", fontWeight = FontWeight.Light,
            modifier = Modifier.padding(start = 20.dp, bottom = 20.dp,top=20.dp)
            ,color = Color.White)

    }
}

