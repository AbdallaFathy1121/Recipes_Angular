import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  active = 'recipe';
  isOpen = false;

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
    this.active = feature;
  }

  onDropdownToggle() {
    this.isOpen = !this.isOpen;
  }
  toggleClose(){
    this.isOpen = false;
  } 


}
