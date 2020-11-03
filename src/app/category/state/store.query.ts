import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Category } from '../category.model';
import { StoreStore, StoreState } from './store.store';

@Injectable({ providedIn: 'root' })
export class StoreQuery extends QueryEntity<StoreState, Category> {

  constructor(protected store: StoreStore) {
    super(store);
  }

}
