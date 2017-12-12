import { FormControl ,FormGroup,FormBuilder,Validators} from "@angular/forms";
import { Observable } from "rxjs";
import "rxjs/Rx";

export function mobileValidator(control:FormControl):any{
    var reg = /^1(3|4|5|7|8)\d{9}$/  ;
    var valid = reg.test(control.value);
    console.log("mobile 的校验结果是 :" + valid);
    return valid ? null : {mobile:true} 
}

export function mobileAsyncValidator(control:FormControl):any{
    var reg = /^1(3|4|5|7|8)\d{9}$/  ;
    var valid = reg.test(control.value);
    console.log("mobile 的校验结果是 :" + valid);
    return Observable.of(valid ? null :{mobile:true}).delay(5000)
}

export function equalPwdValidator(group:FormGroup):any {
    let password:FormControl = group.get("password") as FormControl;
    let pconfirm:FormControl = group.get("pconfirm") as FormControl;
    // console.log(password)
    let valid:boolean = (password.value === pconfirm.value) ? true : false;
    console.log("密码校验 结果是 :"  + valid);
    // return valid ? null : {equal:true}
    return valid ? null : {equal:{desc:"密码和确认密码不匹配111"}}
}
