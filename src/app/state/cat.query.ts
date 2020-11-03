import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CatStore, CatState } from './cat.store';

@Injectable({ providedIn: 'root' })
export class CatQuery extends QueryEntity<CatState> {

  constructor(protected store: CatStore) {
    super(store);
  }

}
