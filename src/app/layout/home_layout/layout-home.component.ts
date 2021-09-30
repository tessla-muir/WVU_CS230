import { Component } from "@angular/core";
import { LivestreamCard } from "src/app/main/livestream-cards.model";
import { mock_livestreamcards } from "src/app/main/mock-livestream-cards";
import { CategoryCard } from "src/app/main/category-cards.model";
import { mock_categorycards } from "src/app/main/mock-category-cards";

@Component ({
    selector: "app-layout-home",
    templateUrl: "layout-home.component.html",
    styleUrls :['layout-home.component.css']
})
export class LayoutHomeComponent {

    livestreamcards:LivestreamCard[] = [];
    categorycards:CategoryCard[] =[];

    constructor() {
        for (var livestreamcard of mock_livestreamcards) {
            this.livestreamcards.push(new LivestreamCard(livestreamcard));
        }
        for (var categorycard of mock_categorycards) {
            this.categorycards.push(new CategoryCard(categorycard))
        }
    }
}