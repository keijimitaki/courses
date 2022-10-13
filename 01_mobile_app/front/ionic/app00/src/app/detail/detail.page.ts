import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage implements OnInit{

  id:string;
  name:string;
  rating:string;
  genre:string;
  lastUsedDate:string;
  memo:string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      
      const selectedShop = this.route.snapshot.queryParams;
      console.log('queryparams: ', selectedShop);

      const data = JSON.parse(selectedShop.data);
      this.id = data.id;
      this.name = data.name;
      this.rating = data.rating;
      this.genre = data.genre;
      this.lastUsedDate = data.lastUsedDate;
      this.memo = data.memo;
      console.log('paramId: ', this.id);

  }

  buttonClick(){
    alert('detail!!')
  }

}
