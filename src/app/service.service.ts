import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  signUp(data :any)
{
  this.http.post<any>("https://vercel-api-three-pearl.vercel.app/signUp",data).subscribe((res)=>{

  })
}
userlogin(data :any)
{
  return this.http.post<any>("https://vercel-api-three-pearl.vercel.app/userlogin",data)
}
addPost(data:any){
  return this.http.post<any>("https://anuj-api-amanyddv.vercel.app/addPost",data)

 
}
feed(){
  return this.http.get("https://vercel-api-three-pearl.vercel.app/feed")
}
}
