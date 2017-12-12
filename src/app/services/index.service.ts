import { Injectable,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Http,URLSearchParams } from '@angular/http';
import "rxjs/Rx";

@Injectable()
export class IndexService {

  constructor(private http:Http) { }

  getTitle():Observable<Title[]>{
    return this.http.get("http://10.7.183.78:8000/title")
    .map(res=>res.json())
  }
  
  getProduct():Observable<Item[]>{
     
    return this.http.get("http://10.7.183.78:8000/list")
      .map(res=>res.json())
  } 
  login():Observable<Item[]>{
    return this.http.get("http://10.7.183.78:8000/list")
      .map(res=>res.json())
  }

}

export class Title{
  constructor(
    public title:string
  ){

  }
}

export class Item{
  constructor(
    public title:string,
    public excerpt:string,
    public name:string,
  ){

  }
}