import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root',
})
export class PaginatorService extends MatPaginatorIntl {
  // constructor() { }
  override itemsPerPageLabel = 'Items per page';
  override nextPageLabel = 'Next';
  override previousPageLabel = 'Previous';
  override firstPageLabel = 'First page';
  override lastPageLabel = 'Last page';

  override getRangeLabel = (
    page: number,
    pageSize: number,
    length: number
  ): string => {
    if (length === 0 || pageSize === 0) return '0 of ' + length;

    const start = page * pageSize;
    const end = Math.min(start + pageSize, length);

    return `${start + 1} - ${end} : ${length}`;
  };
}
