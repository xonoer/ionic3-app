import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-accordion',
  templateUrl: 'accordion.html'
})
export class AccordionPage {
  //是否折叠状态 0折叠 1 打开
  public status = '0'; 
  public contactShow: boolean = false;
  public showList = [];

  list = [
    {
      branchId: "1033",
      groupCust: "",
      mobilePhone: "13111223300",
      groupagencyName: "ETF - 北京天安门",
      contName: "李白",
      id: 84528,
      job: "经理",
      contactPhone: "13111223300",
      ROW_ID: 17
    },
    {
      groupCust: "200017537237",
      branchId: "",
      mobilePhone: "13111223300",
      groupagencyName: "兴业证券",
      contName: "苏轼",
      id: 84548,
      job: "经理",
      contactPhone: "13111223300",
      ROW_ID: 19
    },
    {
      branchId: "000106050245",
      groupCust: "",
      mobilePhone: "13111223300",
      groupagencyName: "广发证券 - 广发证券北京广安门内大街营业部",
      contName: "陈达",
      id: 84552,
      job: "经理",
      contactPhone: "13111223300",
      ROW_ID: 20
    },
    {
      groupCust: "200017537205",
      branchId: "",
      mobilePhone: "13111223300",
      groupagencyName: "招商银行",
      contName: "钟燕",
      id: 84531,
      job: "经理",
      contactPhone: "13111223300",
      ROW_ID: 21
    },
    {
      groupCust: "200017537146",
      branchId: "",
      mobilePhone: "13111223300",
      groupagencyName: "其他",
      contName: "test",
      id: 93699,
      job: "经理",
      contactPhone: "13111223300",
      ROW_ID: 16
    }
  ]

  constructor(public navCtrl: NavController) {
    this.showList = this.list;
  }

  

   //点击展开折叠 
   contactAccordion() {
     console.log(this.list)
    this.contactShow = !this.contactShow;
    this.status == '0' ? this.status = '1' : this.status = '0'; 
  }

  //根据输入框的内容刷新列表 
  public updateList(event: any) {
    let val = event.target.value;
    if (val && val.trim() != '') {
      this.contactShow = true;
      this.status = '1';
      console.log('输入文字',val)
      this.showList = this.list.filter((item) => {
        if(item.contName.indexOf(val) > -1 || item.mobilePhone.indexOf(val) > -1 || item.groupagencyName.indexOf(val) > -1) {
          return true;
        }
      })
    } else {
      this.status = '0';
      this.showList = this.list;
    }
  }

}
