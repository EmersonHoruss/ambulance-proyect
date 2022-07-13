import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uwu-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  listFields = ['id', 'name'];
  dataSource = [{ id: 1, name: 'ASDF' }];
  constructor() {}

  ngOnInit(): void {}
}
