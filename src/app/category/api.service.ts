import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CategoryMock } from './category-mock';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // constructor() { }
  search() {
    return of(CategoryMock)
  }
}
