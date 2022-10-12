import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-food',
  templateUrl: 'food.page.html',
  styleUrls: ['food.page.scss'],
})
export class FoodPage {


  buttonClick(){
    alert('ww')
  }

  id = 1;
  constructor(public navCtrl: NavController) {}

  redirect() {
    // this.router.navigateByUrl('/tabs', {replaceUrl: true});
    const data = {name: 'abc', id: this.id};
    const navData: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(data)
      }
    };
    // this.router.navigate(['/', 'tabs', 'items', this.id], navData);
    //this.navCtrl.navigateForward('/homedetail/' + this.id, navData);
    this.navCtrl.navigateForward('/homedetail');
  }

}
