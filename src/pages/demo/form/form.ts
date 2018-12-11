import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController} from 'ionic-angular';

@IonicPage({
  segment: 'form' 
})
@Component({
  selector: 'demo-form',
  templateUrl: 'form.html'
})
export class FormPage {
  //学历
  public educationItem: any = '';
  //默认值
  public defaultValue = {
    username: null,
    password: null,
    tel: null,
    phone: null,  //待校验
    name: null,
    birthday: null,
    isMarried: null,
    education: null,
    contacts: [{relation: '', name: '', phone: ''}],
    sex: null,
    hobby: [],
    games: [],
    tooth: 0,
    introduction: null
  };
  //爱好
  hobby = [
    {value: 1, name: '游泳'},
    {value: 2, name: '健身'},
    {value: 3, name: '打麻将'},
    {value: 4, name: '吃饭'},
    {value: 5, name: '拉屎'},
    {value: 6, name: '睡觉'}
  ];
  //游戏
  games = [
    {value: 1, name: '传奇世界'},
    {value: 2, name: '吃鸡'},
    {value: 3, name: '反恐精英'},
    {value: 4, name: '血战上海滩'},
    {value: 5, name: '斗地主'}
  ];

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
    ) {

  }

  // 利用JSON方法进行深拷贝
  public model: any = JSON.parse(JSON.stringify(this.defaultValue)); 

  // 点击选择学历 弹出alert框
  public educationAlert() {
    let alertLevel = this.alertCtrl.create();
    alertLevel.setTitle('请选择学历');
    let education = [
      { label: '小学', value: '0' },
      { label: '初中', value: '1' },
      { label: '高中', value: '2' },
      { label: '大专', value: '3' },
      { label: '本科', value: '4' },
      { label: '硕士', value: '5' }
    ]
    for (let i = 0; i < education.length; i++) {
      alertLevel.addInput({
        type: 'radio',
        label: education[i].label,
        value: education[i].value,
        handler: (data: any) => {
          console.log('handle!', data);   //选择的数据（此处打印出object格式的数据）
          this.educationItem = data.label;
          alertLevel.dismiss(); //使aler弹出层消失掉
        }
      });
      alertLevel.present();
    }
  }
 
  public hobbyCheckboxClick(value) {
    let hobby = this.model.hobby;
    let index = hobby.indexOf(value);
    if (index === -1) {
      hobby.push(value);
    } else {
      hobby.splice(index, 1);
    }
  }

  public addContact() {
    this.model.contacts.push({relation: '', name: '', phone: ''});
  }

  removeContact(contact) {
    let doRemove = () => {
      let contacts = this.model.contacts;
      contacts.splice(contacts.indexOf(contact), 1);
    };
    if (!contact.relation && !contact.name && !contact.phone) {
      doRemove();
    } else {
      // this.nativeService.alert(null, null, '已填写内容，确认移除？', () => {
      //   doRemove();
      // });
    }
  }

  setData() {
    this.model = {
      username: 'yanxiaojun617',
      password: '123456',
      name: '张三',
      tel: '13071285290',
      phone: '18688498342',
      birthday: '1995-09-09',
      isMarried: false,
      education: 4,
      contacts: [{
        relation: '朋友',
        name: '李四',
        phone: '18670098124'
      }],
      sex: 1,
      hobby: [2, 3],
      games: [1, 3],
      tooth: 1,
      introduction: '注意：使用div模拟textarea从而实现根据内容多少自动改变文本域高度。https://github.com/KostyaTretyak/ng-contenteditable'
    };
  }

  onSubmit() {
    console.log('提交保存的数据', this.model);
    // this.nativeService.alert('提交成功', '在控制台打印了表单数据');
  }


}
