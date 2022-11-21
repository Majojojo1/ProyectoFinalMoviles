import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx'

import { StorageService } from '../../../services/storage.service';

import { Product } from '../../../interfaces';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  @Input() producto: Product;
  @Input() index: number;

  constructor(
    private iab: InAppBrowser,
    private platform: Platform,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private storageService: StorageService,
  ) { }

  openProduct() {

    if (this.platform.is('ios') || this.platform.is('android')) {
      const browser = this.iab.create(this.producto.url);
      browser.show();
      return;
    }

    window.open(this.producto.url, '_blank');

  }

  onToggleFavorite() {
    this.storageService.saveRemoveArticle(this.producto);
  }

  

}
