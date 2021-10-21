import { HttpClient } from "@angular/common/http";
import { Component, Injectable, Input, OnInit } from "@angular/core";
import { CategoryCard } from "./category-cards.model";
import { CategoryCardsService } from "./category-cards.service";

@Injectable()
@Component({
    selector: 'app-category-cards',
    templateUrl: 'category-cards.component.html',
    styleUrls :['category-cards.component.css']
})
export class CategoryCardsComponent implements OnInit {
    @Input()
    gamePicture!:string;

    @Input()
    streamGame!:string;

    categoryCards: CategoryCard | undefined;
    constructor(private categoryCardsService:CategoryCardsService) {

    }
    
    ngOnInit(): void {
        console.log("Registering showCategoryCard as a subscriber");
        this.categoryCardsService.getCategoryCard();
        this.showCategoryCard();
    }

    showCategoryCard() {
        this.categoryCardsService.getCategoryCard().subscribe((data: CategoryCard []) => {
            for (var item in data) {
                console.log(data[item]);
            }
        })
    }
}