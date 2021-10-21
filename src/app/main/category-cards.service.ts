import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryCard } from "./category-cards.model";

@Injectable({providedIn: 'root'})
export class CategoryCardsService {
    private baseUrl:string = "https://twitch-app-9f7b9-default-rtdb.firebaseio.com/";
    private categoryCardsEndpoints = 'categories.json';
    constructor(private http: HttpClient) {

    }

    getCategoryCard() {
        return this.http.get<CategoryCard []>(this.baseUrl + this.categoryCardsEndpoints);
    }
}