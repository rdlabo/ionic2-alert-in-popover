import {AlertController} from 'ionic-angular';
import {Component} from '@angular/core';

@Component({
    template: `
    <ion-list>
      <ion-item (tap)="violation();">violation</ion-item>
      <ion-item (tap)="hide();">hide</ion-item>
    </ion-list>
  `,
})
export class PopoverReport
{
    constructor(
        private alertCtrl:AlertController
    ){}
    
    violation()
    {
        let prompt = this.alertCtrl.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    }

    hide()
    {
        let confirm = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }
}