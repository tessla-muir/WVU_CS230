import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-category-cards',
    templateUrl: 'category-cards.component.html',
    styleUrls :['category-cards.component.css']
})
export class CategoryCardsComponent {

    @Input()
    gamePicture!:string;
    @Input()
    streamGame!:string;
}