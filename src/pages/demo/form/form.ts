import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'form' 
})
@Component({
  selector: 'demo-form',
  templateUrl: 'form.html'
})
export class FormPage {

  constructor(public navCtrl: NavController) {

  }

}
