import { Component, OnInit } from '@angular/core';

import { Usuario} from '../../class/usuario';

@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	usuario:any;
	formValid:boolean=false;


  	constructor() { }

  	ngOnInit() {
  		this.usuario = new Usuario('','','',0);
  	}


  	onLogin(){
  		console.log("onLogin")
  		//if(){}
  	}

}
