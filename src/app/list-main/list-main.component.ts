import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Http} from '@angular/http';
import { IndexService, Item ,Title} from '../services/index.service';

declare var $:any;  //定义jquery
declare var Swiper:any;  //定义jquery

@Component({
  selector: 'app-list-main',
  templateUrl: './list-main.component.html',
  styleUrls: ['./list-main.component.scss']
})
export class ListMainComponent implements OnInit {


  item:Item[]
  title:Title[]

  list_data:Observable<any>

  banner:Array<any> = [
    "../../assets/img/banner/slide1.jpeg",
    "../../assets/img/banner/slide2.jpeg",
    "../../assets/img/banner/slide3.jpeg",
    "../../assets/img/banner/slide4.jpeg",
    "../../assets/img/banner/slide5.jpeg"
  ]
  constructor(
    private http:Http,
    private indexService:IndexService,
     
  ) {
    this.list_data = this.http.get("http://10.7.183.78/list")
        .map(res=>res.json())
  }

  ngOnInit() {
    var mySwiper1 = new Swiper('#koubei',{
      freeMode : true,
      slidesPerView : 'auto',
      freeModeSticky : true ,
    });
    

    var navSwiper = new Swiper("#tabs",{
      slidesPerView:'auto',
      watchSlidesProgress : true,
       watchSlidesVisibility : true,    // 相当于给  添加  swiper-slide-visible  当前slide可见 
      onTap(swiper){
           var clickedIndex = swiper.clickedIndex;
          
           contentSwiper.slideTo(clickedIndex);
      }
    })
  
    var contentSwiper = new Swiper("#tabs-container",{
        onSlideChangeEnd(swiper){
          var activeIndex = swiper.activeIndex;
          var navSlide =  $("#tabs .swiper-slide ").removeClass("active").eq(activeIndex).addClass("active");
          if(!navSlide.hasClass("swiper-slide-visible")){
              if(contentSwiper.activeIndex>navSwiper.activeIndex){
                  var num = Math.floor(navSwiper.width/navSlide.width()-1);
                  navSwiper.slideTo(contentSwiper.activeIndex-num);
              }else{
                  navSwiper.slideTo(activeIndex);
              }
          }
        }
    })

    this.indexService.getTitle().subscribe(
      title=>{
        this.title = title;
        
      }
     )

   
    this.indexService.getProduct().subscribe(
     item=>{
       this.item = item;
       
     }
    )

  }



}