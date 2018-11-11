import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	submitted:boolean = false;

  	constructor(private formBuilder:FormBuilder) { }

  	ngOnInit() {
  		this.loginForm = this.formBuilder.group({
  			nombre: ['', Validators.required],
  			password: ['', [Validators.required, Validators.minLength(6)]]
  		});
  	}

  	get f(){ return this.loginForm.controls}

  	login(){
  		this.submitted = true;

  		if(this.loginForm.invalid){
  			return;
  		}
  	}

}
