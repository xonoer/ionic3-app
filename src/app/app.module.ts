import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DemoPage } from '../pages/demo/demo';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DemoModule } from '../pages/demo/demo.module';
import { FormPage } from '../pages/demo/form/form';
import { ListPage } from '../pages/demo/list/list';
import { AccordionPage } from '../pages/demo/accordion/accordion';


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    FormPage,
    ListPage,
    AccordionPage
  ],
  imports: [
    BrowserModule,
    DemoModule,
    // IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: DemoPage, name: 'demo', segment: 'demo' },
        { component: FormPage, name: 'form', segment: 'form' },
        { component: ListPage, name: 'list', segment: 'list' },
        { component: AccordionPage, name: 'accordion', segment: 'accordion' },
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    FormPage,
    ListPage,
    AccordionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
