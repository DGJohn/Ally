import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArticleOnePage } from '../pinwall/articleOne/articleOne';
import { ArticleTwoPage } from '../pinwall/articleTwo/articleTwo';


@Component({
  selector: 'page-pinwall',
  templateUrl: 'pinwall.html'
})
export class PinwallPage {

  constructor(public navCtrl: NavController) {
  }

  pushArticleOnePage() {
    this.navCtrl.push(ArticleOnePage);
  }

  pushArticleTwoPage() {
    this.navCtrl.push(ArticleTwoPage);
  }

}
