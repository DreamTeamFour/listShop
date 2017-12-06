import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes,RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { FootComponent } from './foot/foot.component';
import { ListComponent } from './list/list.component';
import { ClassifyComponent } from './classify/classify.component';
import { MineComponent } from './mine/mine.component';
import { ListMainComponent } from './list-main/list-main.component';


//配置路由
const routes:Routes = [
  {path:"",redirectTo:"/list",pathMatch:"full"},
  {path:"list",component:ListComponent},
  {path:"classify",component:ClassifyComponent},
  {path:"mine",component:MineComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    FootComponent,
    ListComponent,
    ClassifyComponent,
    MineComponent,
    ListMainComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
