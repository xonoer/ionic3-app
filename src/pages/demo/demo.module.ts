import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { DemoPage } from './demo';
// import { FormPage } from './form/form';

@NgModule({
  declarations: [
    DemoPage,
  ],
  imports: [
    IonicPageModule.forChild(DemoPage),
    // IonicModule.forRoot(DemoPage)
    // IonicModule.forRoot(DemoPage, {}, {
    //   links: [
    //      { component: FormPage, name: 'form', segment: 'demo/form' }
    //   ]
    // })
  ],
  exports: [
		DemoPage
	]
})
export class DemoModule {}



