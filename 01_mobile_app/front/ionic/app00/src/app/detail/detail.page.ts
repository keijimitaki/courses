import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage implements OnInit{

  paramId:string;
  
  constructor(private route: ActivatedRoute) {}
  //constructor() {}

  ngOnInit(): void {
      // this.route.paramMap.subscribe(paramMap => {
      //   //this.paramId = paramMap.get('data');
      // });
      // this.paramId = this.navParams.get('data');
      
      
      const selectedShop = this.route.snapshot.queryParams;
      console.log('queryparams: ', selectedShop);

      const data = JSON.parse(selectedShop.data);
      this.paramId = data.id;
      console.log('paramId: ', this.paramId);

  }

  buttonClick(){
    alert('detail!!')
  }

}
