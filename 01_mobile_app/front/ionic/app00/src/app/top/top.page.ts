import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FOODSHOPS } from '../../DummyData';

@Component({
  selector: 'app-top',
  templateUrl: 'top.page.html',
  styleUrls: ['top.page.scss'],
})
export class TopPage {

  shops = FOODSHOPS;
  constructor(public navCtrl: NavController) {}

  buttonClick(){
    alert('TOOOOOOP!!')
  }

  toDetail(id:string) {
    // this.router.navigateByUrl('/tabs', {replaceUrl: true});
    const selectedShop = this.shops.filter((shop, index, array) => {
      return (array[index]['id'] == id)
    })
    const data = {
      id: id,
      name: selectedShop[0]['name'], 
      rating: selectedShop[0]['rating'], 
      genre: selectedShop[0]['genre'], 
      lastUsedDate: selectedShop[0]['lastUsedDate'], 
      memo: selectedShop[0]['memo'], 
    };
    const navData: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(data)
      }
    };
    // this.router.navigate(['/', 'tabs', 'items', this.id], navData);
    //this.navCtrl.navigateForward('/homedetail/' + this.id, navData);
    
    this.navCtrl.navigateForward('/detail',navData);
  }

}
