import { Inject, Injectable } from '@angular/core';
import { LAYOUT_TOKEN } from './layout.token';
import { LayoutInterface } from './layout.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private layout: BehaviorSubject<LayoutInterface>;

  // angular just accept to inject class, and if we have other values we should use @Inject
  constructor(@Inject(LAYOUT_TOKEN) private config: LayoutInterface) {
    this.layout = new BehaviorSubject<LayoutInterface>(config);
  }

  setLayout(config: LayoutInterface): void {
    this.layout.next(config);
  }

  getLayout(): Observable<LayoutInterface> {
    return this.layout.asObservable();
  }
}
