import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  signUp(data :any)
{
  this.http.post<any>("http://localhost:7000/signUp",data).subscribe((res)=>{

  })
}
userlogin(data :any)
{
  return this.http.post<any>("http://localhost:7000/userlogin",data)
}
addPost(data:any){
  return this.http.post<any>("http://localhost:7000/addPost",data)

 
}
feed(){
  return this.http.get("http://localhost:7000/feed")
}
}
