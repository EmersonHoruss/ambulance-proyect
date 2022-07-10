import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'uwu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() onToggleMenu: EventEmitter<void> = new EventEmitter();
  username = 'Emerson Perales';

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.onToggleMenu.emit();
  }
}
