import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//CLASS
import { User} from '../../class/user';

//SERVICES
import { LoginService } from '../../services/login.service';


@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	usuario:any;
	formValid:boolean=false;


  	constructor(
      private serviceLogin:LoginService,
      private router: Router) { }

  	ngOnInit() {
      if (sessionStorage.getItem('user')) {
        //console.log(JSON.parse(sessionStorage.getItem('data'))); //converts to json object
        this.router.navigate(['/main']);
      } else {
  		  this.usuario = new User('','','',0);
      }
  	}


  	onLogin(){
      this.serviceLogin.login(this.usuario.email,this.usuario.password)
      .subscribe((resp)=>{
        console.log(resp)
        if(resp['Data']){
          this.usuario = resp['Data']
          sessionStorage.setItem('user', JSON.stringify(this.usuario));
          this.router.navigate(['/main']);
        }
      });
  	}

}
