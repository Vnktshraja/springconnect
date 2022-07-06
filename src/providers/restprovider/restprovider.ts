import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable , of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';



let baseUrl = 'http://localhost:8080/user';

@Injectable()
export class RestProvider {


    attData: any;
    constructor(public http: HttpClient) {
       
    }
    
	 getUsers(){
	        return this.http.get(baseUrl+'/get');
   }
  
   createUser(user:any){
       console.log(user)
       return new Promise((resolve,reject) => {
        this.http.post(baseUrl+'/create',user)
        .subscribe(
                (res:any)=>{
           resolve(res);
           
        }, (err) => {
            console.log('error in validating');
            reject(err);               
        });
    });
      
   }   
}
