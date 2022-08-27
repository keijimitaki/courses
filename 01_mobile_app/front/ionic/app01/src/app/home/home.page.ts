import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
