import { Component, OnInit } from '@angular/core';

//SERVICES
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serviceLogin:LoginService) { }

  ngOnInit() {
  	this.serviceLogin.login('claudio@gmail.com','claudio')
  	.subscribe((resp)=>{
  		console.log(resp)
  	});
  }

}
