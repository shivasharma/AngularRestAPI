import { Component } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';
import {HttpClient} from '@angular/common/http'
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularrestapi';
  listofusers:User[]=[];
  singleuser!:User;
  
 constructor (private userSerivce: UserService){}

 onGetUsers():void{
  this.userSerivce.getUsers().subscribe((users)=>{
    this.listofusers=users
    console.table(this.listofusers);
  });
 }

 onGetUser():void{
  this.userSerivce.getUser().subscribe((user)=>{
    this.singleuser=user
    console.table(this.singleuser);
  });
 }

 reset():void{
  window.location.reload();
 }
}
