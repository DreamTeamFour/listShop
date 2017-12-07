import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.scss']
})
export class ClassifyComponent implements OnInit {

  private classify:Array<classify>

  private hot:Array<any>
  constructor() { }

  ngOnInit() {
    this.classify=[
      new classify("../../assets/img/classify/1.png","厨房","#dde1ec"),
      new classify("../../assets/img/classify/2.png","餐酒","#e7f6f9"),
      new classify("../../assets/img/classify/3.png","家居","#f5e9e9"),
      new classify("../../assets/img/classify/4.png","时尚","#f0e3d3"),
      new classify("../../assets/img/classify/5.png","个护","#dde1ec"),
      new classify("../../assets/img/classify/6.png","彩妆","#e7f6f9"),
      new classify("../../assets/img/classify/7.png","母婴","#f5e9e9"),
      new classify("../../assets/img/classify/8.png","运动","#f0e3d3")
    ]

    this.hot=[
      new hot("../../assets/img/hot/2-1.jpg","润唇膏"),
      new hot("../../assets/img/hot/2-2.jpg","汤锅炖锅"),
      new hot("../../assets/img/hot/2-3.jpg","保湿"),
      new hot("../../assets/img/hot/2-4.jpg","跑鞋"),
      new hot("../../assets/img/hot/2-5.jpg","围巾"),
      new hot("../../assets/img/hot/2-6.jpg","身体乳"),
      new hot("../../assets/img/hot/2-7.jpg","空气净化器"),
      new hot("../../assets/img/hot/2-8.jpg","保温杯")
    ]
  }

}
export class classify{
  constructor(
    public path:string,
    public title:string,
    public color:string
  ){}
}
export class hot{
  constructor(
    public path:string,
    public title:string
  ){}
}

