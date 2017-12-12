import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login.router',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    
  ){
    
  }

  ngOnInit() {
  }
  register(){
    this.router.navigate(["/register"]);
  }
  back(){
    this.router.navigate(["/foot/mine"]);
  }
}
