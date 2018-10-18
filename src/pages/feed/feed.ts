import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  post1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post1 = { nome:'Marty McFly', 
      data:'November 5, 1955',
      avatar:'assets/imgs/marty-avatar.png',
      texto:'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a'
        +' DeLorean?! Whoa. This is heavy.' , 
      imagem:'assets/imgs/advance-card-bttf.png'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
