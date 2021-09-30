import { Component } from "@angular/core";
import { LivestreamCard } from "src/app/main/livestream-cards.model";
import { mock_livestreamcards } from "src/app/main/mock-livestream-cards";

@Component({
    selector: 'app-following-live',
    templateUrl: 'following-live.component.html',
    styleUrls: ['following-live.component.css']
})
export class FollowingPage_LiveComponent {
    
    livestreamcards:LivestreamCard[] = [];

    constructor() {
        for (var livestreamcard of mock_livestreamcards) {
            this.livestreamcards.push(new LivestreamCard(livestreamcard));
        }
    }
}