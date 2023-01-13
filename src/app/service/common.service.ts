import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private myRoute: Router,private http: HttpClient) { }

  formSubmit(formData:any){
    console.log('data',formData);
    this.http
      .post('http://localhost:5000/api/create-user', formData)
      .subscribe((response:any) => {
        console.log(response)
        console.log(response.form);
        this.myRoute.navigateByUrl(response.form)
      });

  }
}
