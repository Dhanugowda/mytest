import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hom',
  templateUrl: './hom.page.html',
  styleUrls: ['./hom.page.scss'],
})
export class HomPage  {

  constructor( private router: Router) {}
  arrow() {
    this.router.navigate(['/home']);
  }
 
options={
  centeredSlides : true,
  loop : true,
  autoplay : true,
}

}
