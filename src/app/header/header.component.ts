import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen = false;

  onDropdownToggle() {
    this.isOpen = !this.isOpen;
  }
  toggleClose(){
    this.isOpen = false;
  } 


}
