import { OnDestroy, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { Category } from '../category/category.model';
import { StoreQuery } from '../category/state/store.query';
import { StoreService } from '../category/state/store.service';

export type SearchEvent = { searchTerm: string, selectedCategory: Category}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy, OnChanges {
  @Input() searchTerm: string;
  @Input() selectedCategoryId: number;
  @Output() search = new EventEmitter<SearchEvent>();
  selectedCategory: Category;
  categories$: Observable<Category[]>;
  subscription: Subscription;



  constructor(private categoryStoreService: StoreService, private categoryQuery: StoreQuery) { }


  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    if (changes.selectedCategoryId && changes.selectedCategoryId.currentValue !== null) {
      this.selectedCategory = this.categoryQuery.getEntity(changes.selectedCategoryId.currentValue);  
    }
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    // let check = this.subscription.unsubscribe();
    // this.checkSub(check);

  }

  ngOnInit(): void {
    this.fetchCategories();
    this.categories$ = this.categoryQuery.selectAll();
    
  }

  fetchCategories() {
    this.subscription = this.categoryStoreService.search().subscribe();
  }

  compareWith(category1: Category, category2: Category) {
    return category2 && category1.id === category2.id;
  }

  // checkSub(subscription){
  //   if (!subscription.closed) {
  //     //subscribed
  //     console.log("da xu ly");
  //   } else {
  //     //not subscribed
  //     console.log("chua xu ly");
  //   }

  // }




}
