import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A Text Recipe', ' Test reccipe for My recipes', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/lentil-ragu-with-courgetti-ffde8f2.jpg?quality=90&resize=960,872')
];
  constructor() { }

  ngOnInit(): void {
  }

}