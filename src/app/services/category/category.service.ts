import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResponseModel } from 'src/app/models/category/categoryResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getCategoryUrl ='https://localhost:44306/api/categories/getall'; 
  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<CategoryResponseModel>{
    return this.httpClient.get<CategoryResponseModel>(this.getCategoryUrl);
  }
}
