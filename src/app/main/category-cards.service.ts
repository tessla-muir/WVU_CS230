import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryCard } from "./category-cards.model";


@Injectable({providedIn: 'root'})
export class CategoryCardsService {
    private baseUrl:string = "https://twitch-app-9f7b9-default-rtdb.firebaseio.com/";
    private categoryCardsEndpoints = 'categories';
    private counter:number = 6;
    constructor(private http: HttpClient) {

    }

    getCategoryCard() {
        return this.http.get<CategoryCard []>(this.baseUrl + this.categoryCardsEndpoints + ".json");
    }

    modifyCategoryCard(data:CategoryCard) {
        this.counter++;
        return this.http.put(this.baseUrl + this.categoryCardsEndpoints + "/" + this.counter + ".json", data);
    }
}