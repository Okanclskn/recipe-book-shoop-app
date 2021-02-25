import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
 tempNavigate = true;
 constructor(){}
 onTempNavigation(event) {
   console.log(event,"sadas")
   this.tempNavigate = event

   
 }
}
