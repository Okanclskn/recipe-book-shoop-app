import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() tempNavigate;
  @Output() tempNavigationEvent = new EventEmitter<boolean>()

  collapsed = true;
  constructor() { }

  ngOnInit(): void {
  }
 
  onShowShoppingList() {
    
    this.tempNavigationEvent.emit(this.tempNavigate = true)
    console.log(this.tempNavigate)
  }
  onShowRecipes() {
   
    this.tempNavigationEvent.emit(this.tempNavigate = false)
    console.log(this.tempNavigate)
   
  }
}
