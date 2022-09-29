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

    val menuList = listOf(
        DrawerMenuData.AllInboxes,
        DrawerMenuData.Divider,
        DrawerMenuData.Primary,
        DrawerMenuData.HeaderOne,
        DrawerMenuData.Social,
        DrawerMenuData.AccountBox,
        DrawerMenuData.Build,
        DrawerMenuData.Create,
        DrawerMenuData.Face,
        DrawerMenuData.Divider,
        DrawerMenuData.HeaderOne,
        DrawerMenuData.Back,
        DrawerMenuData.Social,
        DrawerMenuData.AccountBox,
        DrawerMenuData.Build,
        DrawerMenuData.Create,
        DrawerMenuData.Face,
    )

    Column(
        Modifier
            .verticalScroll(scrollState)
            .background(color = Color(181, 201, 154))) {
        Text(text = "App", color = Color.White,
            modifier = Modifier
                .padding(start = 20.dp, top = 20.dp),
            fontSize = 20.sp,
            fontWeight = FontWeight.Bold)
        menuList.forEach{
            item ->
            when{
                item.isDivider ->{
                    Divider(modifier = Modifier.padding(bottom = 20.dp, top = 20.dp))
                }
                item.isHeader ->{
                    Text(text = item.title!!, fontWeight = FontWeight.Light,
                        modifier = Modifier.padding(start = 20.dp, bottom = 20.dp,top=20.dp)
                        ,color = Color.White)
                
                } else ->
            {
                AppDrawerItem(item = item)
            }
            }
        }
    }
}

@Composable
fun AppDrawerItem(item: DrawerMenuData) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .height(50.dp)
            .padding(top = 16.dp)
    ){
//        val d:ImageVector = item.icon!!
//        d(
//            tint = Color.Yellow,
//        )
            Image(imageVector = item.icon!!,
                contentDescription = item.title!!,
                modifier = Modifier.weight(weight = 0.5f),
                colorFilter = ColorFilter.tint(
                    Color(233,245,219),
                    BlendMode.SrcIn)

            )
            Text(text = item.title, modifier = Modifier.weight(weight = 2.0f),color = Color.White)

    }
}