import { Component } from "@angular/core";
import { CategoryCard } from "src/app/main/category-cards.model";
import { CategoryCardsService } from "src/app/main/category-cards.service";
import { mock_categorycards } from "src/app/main/mock-category-cards";

@Component({
    selector: 'app-browse-categories',
    templateUrl: 'browse-categories.component.html',
    styleUrls: ['browse-categories.component.css']
})
export class BrowsePage_CategoriesComponent {
    categorycards:CategoryCard[] =[];

    constructor(private CategoryCardsService: CategoryCardsService) {
        console.log();

    }

    ngOnInit() {
        this.CategoryCardsService.getCategoryCard().subscribe((data: CategoryCard[]) => {
            for (var item of data) {
                this.categorycards.push(item);
            }
        }); 
    }
}