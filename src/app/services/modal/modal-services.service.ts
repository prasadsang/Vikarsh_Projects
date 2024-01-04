import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalServicesService {

  private openFormSource = new Subject<void>();

  openForm$ = this.openFormSource.asObservable();

  openForm() {
    this.openFormSource.next();
  }
}
