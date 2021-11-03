import { Component } from "@angular/core";
import { DatabaseService } from "src/app/database/database.service";
import { CategoryCard } from "src/app/main/category-cards.model";
import { CategoryCardsService } from "src/app/main/category-cards.service";

@Component({
    selector: 'app-add-category',
    templateUrl: 'add-category.component.html',
    styleUrls: ['add-category.component.css']
})
export class AddCategoryComponent {
    constructor(private infoService: CategoryCardsService, private dbService:DatabaseService) {
        dbService.showData();
    }

    onAddCategoryCard(data: CategoryCard) {
        this.infoService.modifyCategoryCard(data).subscribe(data => {
            console.log("Added Category Card");
            for (let item in data) {
                console.log(item);
            }
        });
    }
}