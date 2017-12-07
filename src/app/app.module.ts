import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes,RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { FootComponent } from './foot/foot.component';
import { ListComponent } from './list/list.component';
import { ClassifyComponent } from './classify/classify.component';
import { MineComponent } from './mine/mine.component';
import { ListMainComponent } from './list-main/list-main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


//配置路由
const routes:Routes = [
    {path:"",redirectTo:"/foot",pathMatch:"full"},
    {path:"foot",component:FootComponent,data:[{idPoad:true}],
      children:[
        {path:"",redirectTo:"/list",pathMatch:"full"},
        {path:'list',component:ListComponent},
        {path:"classify",component:ClassifyComponent},
        {path:"mine",component:MineComponent},
      ]},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    FootComponent,
    ListComponent,
    ClassifyComponent,
    MineComponent,
    ListMainComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
