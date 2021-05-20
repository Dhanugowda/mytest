import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
userid:string;
password:string;
  
  constructor(private router: Router ) {
     
  }

  ngOnInit() {
      
      }
      login()
      {
     
      }
      arrow(){
        this.router.navigate(['/home']);
      }
     
        
}
