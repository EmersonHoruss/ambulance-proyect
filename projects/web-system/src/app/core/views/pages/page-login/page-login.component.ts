import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../config/injections/layout/layout.service';
@Component({
  selector: 'uwu-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  constructor(private layoutService: LayoutService) {
    this.layoutService.setLayout({ hideHeader: true, hideSidebar: true });
  }

  ngOnInit(): void {}
}
