import { Component } from '@angular/core';
import data from './data/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  itemsData = data;
  itemsLenght = 5;
  config1 = {};
}
