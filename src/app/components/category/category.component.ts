import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  category1: any = {
    categoryName: 'category1',
  };
  category2: any = {
    categoryName: 'category2',
  };
  category3: any = {
    categoryName: 'category3',
  };
  category4: any = {
    categoryName: 'category4',
  };

  categories = [this.category1, this.category2, this.category3, this.category4];

  constructor() {}

  ngOnInit(): void {}
}
