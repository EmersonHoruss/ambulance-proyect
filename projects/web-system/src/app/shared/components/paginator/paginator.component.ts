import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'uwu-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  @Input() length!: number;
  @Input() pageSize!: number;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  changePage(pageEvent: PageEvent): void {
    this.onChangePage.emit(pageEvent.pageIndex);
  }
}
