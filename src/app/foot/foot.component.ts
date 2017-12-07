import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot.router',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss']
})
export class FootComponent implements OnInit {
  private footer:Array<foot>;
  constructor() { }

  ngOnInit() {
    this.footer = [
      new foot("/foot/list","清单","icon-liebiaoqingdan"),
      new foot("/foot/classify","挑选","icon-tubiaozhizuomoban"),
      new foot("/foot/mine","我的","icon-wode")
    ]
  }

}
export class foot{
  constructor(
    public path:string,
    public title:string,
    public icon:string

  ){

  }
}