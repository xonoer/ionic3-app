import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'demo-list',
  templateUrl: 'list.html'
})
export class ListPage {
  //页码
  public pageNum: any = 0;
  //页数
  public pageCount: number = 10;
  //隐藏“没有更多”
  public isHidden: boolean = true;

  constructor(public navCtrl: NavController) {

  }

  list = [
    {
      id: 0,
      name: '安可心啊',
      phone: '13071285292',
      job: '我是程序员啊',
    },
    {
      id: 1,
      name: 'shion',
      phone: '13071285292',
      job: 'yeshi是程序员啊',
    },
    {
      id: 84597,
      name: '安可心啊',
      phone: '13071285292',
      job: '我是程序员啊',
    },
    {
      id: 1,
      name: 'shion',
      phone: '13071285292',
      job: 'yeshi是程序员啊',
    },
    {
      id: 84597,
      name: '安可心啊',
      phone: '13071285292',
      job: '我是程序员啊',
    },
    {
      id: 1,
      name: 'shion',
      phone: '13071285292',
      job: 'yeshi是程序员啊',
    },
    {
      id: 84597,
      name: '安可心啊',
      phone: '13071285292',
      job: '我是程序员啊',
    },
    {
      id: 1,
      name: 'shion',
      phone: '13071285292',
      job: 'yeshi是程序员啊',
    },
    {
      id: 84597,
      name: '安可心啊',
      phone: '13071285292',
      job: '我是程序员啊',
    },
    {
      id: 84597,
      name: '安可心啊',
      phone: '13071285292',
      job: '我是程序员啊',
    }
  ]

  //滑动删除 
  public delete(index, id) {
    
    //请求后台删除接口（成功则删除）
    if(true) {
      this.list.splice(index, 1);
    }
  }

  //下拉刷新
  public doRefresh(refresher) {
    // 指定获取第一页的数据
    let pageNum = 0;

    // 请求后台接口 获取最新的第一页的数据
    let data = [
      {
        id: 4,
        name: '安1',
        phone: '13071285292',
        job: '我是程序员啊',
      },
      {
        id: 5,
        name: '安2',
        phone: '13071285292',
        job: 'yeshi是程序员啊',
      },
      {
        id: 6,
        name: '安3',
        phone: '13071285292',
        job: '我是程序员啊',
      }
    ]
    if(data) {
      // 清空当前页面的列表，重新赋予
      this.list = [];
      this.list = this.list.concat(data);
    }
    refresher.complete();
  };

  
  // 上拉加载
  public doInfinite(infiniteScroll) {
      // 每执行一次上拉加载，获取下一页的数据
      this.pageNum++;
      // 请求后台接口 获取下一页的数据
      let data = [
        {
          id: 7,
          name: '安7',
          phone: '13071285292',
          job: '我是程序员啊',
        },
        {
          id: 8,
          name: '安8',
          phone: '13071285292',
          job: 'yeshi是程序员啊',
        },
        {
          id: 9,
          name: '安9',
          phone: '13071285292',
          job: '我是程序员啊',
        }
      ]
      if(data) {
        this.list = this.list.concat(data);
        // 如果当次取到的数据数小于每次应取到pageCount，说明数据加载完了，显示‘没有更多了...’，停止上拉加载
        if (data.length < this.pageCount) {
          this.isHidden = false;
          infiniteScroll.enable(false);
        }
      }
      infiniteScroll.complete();
  }
    
}
