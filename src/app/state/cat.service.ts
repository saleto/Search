import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { CatStore } from './cat.store';
import { Cat } from './cat.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CatService {

  constructor(private catStore: CatStore,
              private http: HttpClient) {
  }

  get() {
    return this.http.get<Cat[]>('https://api.com').pipe(tap(entities => {
      this.catStore.set(entities);
    }));
  }

  add(cat: Cat) {
    this.catStore.add(cat);
  }

  update(id, cat: Partial<Cat>) {
    this.catStore.update(id, cat);
  }

  remove(id: ID) {
    this.catStore.remove(id);
  }
}
