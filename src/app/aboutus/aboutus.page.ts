import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage  {

  constructor(private router : Router) { }
  arrow()
  {
    this.router.navigate['/login']
  }
  
   options={
    centeredSlides : true,
    loop : true,
    autoplay : true,
  }
 
}
