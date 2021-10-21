import { Component } from "@angular/core";
import { LivestreamCard } from "src/app/main/livestream-cards.model";
import { mock_livestreamcards } from "src/app/main/mock-livestream-cards";
import { CategoryCard } from "src/app/main/category-cards.model";
import { CategoryCardsService } from "src/app/main/category-cards.service";

@Component ({
    selector: "app-layout-home",
    templateUrl: "layout-home.component.html",
    styleUrls :['layout-home.component.css']
})
export class LayoutHomeComponent {

    livestreamcards:LivestreamCard[] = [];
    categorycards:CategoryCard[] = [];

    constructor(private CategoryCardsService: CategoryCardsService) {
        console.log();

        for (var livestreamcard of mock_livestreamcards) {
            this.livestreamcards.push(new LivestreamCard(livestreamcard));
        }
    }

    ngOnInit() {
        this.CategoryCardsService.getCategoryCard().subscribe((data: CategoryCard[]) => {
            for (var item of data) {
                this.categorycards.push(item);
            }
        }); 
    }
}