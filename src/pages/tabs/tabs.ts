import { Component } from '@angular/core';

import { DemoPage } from '../demo/demo';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DemoPage;
  tab2Root = HomePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
