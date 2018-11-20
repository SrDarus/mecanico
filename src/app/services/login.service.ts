import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //http://localhost:8080/apis/mecanicoApi/login.php?email=claudio@gmail.com&password=claudio

	//private urlBase:string="http://localhost:8080/apis/mecanicoApi/"
	private urlBase:string="http://localhost:80/apis/mecanicoApi/"



  constructor(private http:HttpClient) { }

  login(email:string, password:string){

  	let controlador="login.php?email="+email+"&password="+password
  	//?email="+email+"&password="+password;
  	return this.http.get(this.urlBase+controlador);
  }
}