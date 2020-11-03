import { Component } from '@angular/core';
import { SearchEvent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Search';
  category: number;
  searchEvent: SearchEvent;
  searchTerm: string;
}
