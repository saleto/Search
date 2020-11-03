import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { StoreStore } from './store.store';
import { Store } from './store.model';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Injectable({ providedIn: 'root' })
export class StoreService {

  // constructor(private storeStore: StoreStore,
  //             private http: HttpClient) {
  // }

  constructor(private storeStore: StoreStore,
    private apiService: ApiService) {
}

  // get() {
  //   return this.http.get<Store[]>('https://api.com').pipe(tap(entities => {
  //     this.storeStore.set(entities);
  //   }));
  // }

  // add(store: Store) {
  //   this.storeStore.add(store);
  // }

  // update(id, store: Partial<Store>) {
  //   this.storeStore.update(id, store);
  // }

  // remove(id: ID) {
  //   this.storeStore.remove(id);
  // }

  search() {
    return this.apiService.search()
      .pipe(
        tap(cate => this.storeStore.set(cate))
      );
  }
}
