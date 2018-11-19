import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
      private router: Router) { }

  ngOnInit() {
  		if (sessionStorage.getItem('user')) {
    	  //console.log(JSON.parse(sessionStorage.getItem('data'))); //converts to json object
    	} else {
    	  this.router.navigate(['/login']);
    	}
  }

}
