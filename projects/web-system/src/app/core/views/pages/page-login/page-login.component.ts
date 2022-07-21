import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../config/injections/layout/layout.service';
import { Router } from '@angular/router';
@Component({
  selector: 'uwu-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  constructor(private layoutService: LayoutService, private router: Router) {
    this.layoutService.setLayout({ hideHeader: true, hideSidebar: true });
  }

  ngOnInit(): void {}

  navigate() {
    this.router.navigate(['/medic']);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.layoutService.setLayout({ hideHeader: false, hideSidebar: false });
  }
}
