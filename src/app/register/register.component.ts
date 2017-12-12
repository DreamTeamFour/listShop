import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,FormBuilder,Validators} from '@angular/forms';
import * as $ from "jquery"
import {equalPwdValidator, mobileValidator, mobileAsyncValidator} from "../validator/validator"
import {Http} from "@angular/http"
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formModel:FormGroup;
  dataSource:Observable<any>   // 可观察对象
  constructor(fb:FormBuilder,private http:Http) { 
    this.formModel = fb.group({
     
      mobile:["",mobileValidator,mobileAsyncValidator],
      passwordGroup:fb.group({
        password:["",Validators.minLength(6)],
        pconfirm:[""]
      },{
        validator:equalPwdValidator
      })
    })
  }

  ngOnInit() {

  }
  //返回
  goback=()=>{
    history.go(-1);
  }

  onSubmit(){
    //插入数据库
    $.ajax({
      url:"http://10.7.183.78:8000/register",
      type:'post',
      data:{
        "phoneNum":this.formModel.value.mobile,
        "password":this.formModel.value.passwordGroup.password
      }
    })
    // location.href="../login";
  }

}
