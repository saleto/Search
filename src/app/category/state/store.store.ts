import { Injectable } from '@angular/core';
import { Store } from './store.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Category } from '../category.model';

export interface StoreState extends EntityState<Category> {}
// export interface CategoryState extends EntityState<CategoryModel> {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'store' })
export class StoreStore extends EntityStore<StoreState, Category> {

  constructor() {
    super();
  }

}

