import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormPage } from './form/form';
import { ListPage } from './list/list';
import { AccordionPage } from './accordion/accordion';


@IonicPage({
  segment: 'login1'
})
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items = [
    {
      title: '列表',
      id: 0,
      page: ListPage
    },
    {
      title: '表单',
      id: 1,
      page: FormPage
    },
    {
      title: '列表折叠&搜索（前端过滤）',
      id: 2,
      page: AccordionPage
    }
  ]
  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoPage');
  }

  public toDemos(index) {
    console.log('index', index)
    this.navCtrl.push(this.items[index].page, {
    })
  }
}
