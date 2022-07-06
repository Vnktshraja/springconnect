import { Component, OnInit } from '@angular/core';
import { RestProvider } from '../../providers/restprovider/restprovider';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  public users = [];
  constructor(public restProvider:RestProvider) { }

  ngOnInit() {
  }

  getUser(){
    this.restProvider.getUsers().subscribe((data:any)=>{
      this.users = data;
    }, (error) => {

      console.log('Something went wrong ... ');
      console.log(error);
  });
  }

}