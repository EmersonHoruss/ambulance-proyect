import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MetaDataFieldInterface } from '../../interfaces/MetaDataField';

@Component({
  selector: 'uwu-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() fields: Array<string> = [];
  @Input() metaDataFields: Array<MetaDataFieldInterface> = [];
  @Input() dataSource: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['metaDataFields']) {
      this.fields = this.metaDataFields.map(
        (e: MetaDataFieldInterface) => e.name
      );
    }
  }
}
