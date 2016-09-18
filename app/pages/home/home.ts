import { Component } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';
import { PopoverReport } from './../popover';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(
      public navCtrl: NavController,
      public popoverCtrl: PopoverController
  ) {}

  presentPopover(ev)
  {
    let popover = this.popoverCtrl.create(PopoverReport);
    popover.present({ev: ev});
  }
}
