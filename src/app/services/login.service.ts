import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	private urlBase:string="http://localhost:80/api/mecanicoApi/"



  constructor(private http:HttpClient) { }

  login(email:string, password:string){
  	email="claudio@gmail.com"
  	password="claudio"

  	let controlador="login.php?email="+email+"&password="+password
  	//?email="+email+"&password="+password;
  	return this.http.get(this.urlBase+controlador);
  }
}