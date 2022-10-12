import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navi',
  templateUrl: 'navi.page.html',
  styleUrls: ['navi.page.scss'],
})
export class NaviPage {

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
