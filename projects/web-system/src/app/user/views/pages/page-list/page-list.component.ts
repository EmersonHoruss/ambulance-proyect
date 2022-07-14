import { Component, OnInit } from '@angular/core';
import { MetaDataFieldInterface } from 'projects/web-system/src/app/shared/interfaces/MetaDataField';

@Component({
  selector: 'uwu-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  listFields: Array<string> = [
    'Código',
    'Nombre',
    'Correo Personal',
    'Correo Institucional',
  ];

  data: Array<any> = [
    {
      Código: 1,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 2,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 3,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 4,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 5,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 6,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 7,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 8,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 9,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 10,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 11,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 12,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 13,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 14,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 15,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 16,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 17,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 18,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 19,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 20,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 21,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 22,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 23,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 24,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 25,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 26,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 27,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 28,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 29,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 30,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 31,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 32,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 33,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 34,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 35,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 36,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 37,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 38,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 39,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 40,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 41,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 42,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 43,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 44,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 45,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 46,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 47,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
    {
      Código: 48,
      Nombre: 'Jose',
      'Correo Personal': 'holaMundo@hotmail.com',
      'Correo Institucional': 'holaMundo@uwu.com',
    },
  ];

  dataSource: Array<any> = [];

  length = this.data.length;
  pageSize = 15;

  metaDataFields: Array<MetaDataFieldInterface> = [
    {
      name: 'Código',
      alias: 'Code',
    },
    {
      name: 'Nombre',
      alias: 'Name',
    },
    {
      name: 'Correo Personal',
      alias: 'Personal Email',
    },
    {
      name: 'Correo Institucional',
      alias: 'Institute Email',
    },
  ];

  constructor() {
    this.getRecordsByPage(0);
  }

  ngOnInit(): void {}

  getRecordsByPage(page: number) {
    this.dataSource = [
      ...this.data.slice(
        page * this.pageSize,
        page * this.pageSize + this.pageSize
      ),
    ];
  }
}
