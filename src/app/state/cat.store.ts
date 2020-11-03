import { Injectable } from '@angular/core';
import { Cat } from './cat.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CatState extends EntityState<Cat> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cat' })
export class CatStore extends EntityStore<CatState> {

  constructor() {
    super();
  }

}

