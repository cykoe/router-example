import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  clicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  slideDown() {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }

}
