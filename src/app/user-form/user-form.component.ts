import { Component, Injectable, OnInit } from '@angular/core';
import { RestProvider } from '../../providers/restprovider/restprovider';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})


export class UserFormComponent implements OnInit {

  public user:any = {};
  constructor(public restProvider:RestProvider) { }

  ngOnInit() {
  }

  createUser(user: any){
    
    this.restProvider.createUser(user);
  }

}
