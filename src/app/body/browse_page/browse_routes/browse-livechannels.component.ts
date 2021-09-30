import { Component } from "@angular/core";
import { LivestreamCard } from "src/app/main/livestream-cards.model";
import { mock_livestreamcards } from "src/app/main/mock-livestream-cards";

@Component({
    selector: 'app-browse-livechannels',
    templateUrl: 'browse-livechannels.component.html',
    styleUrls: ['browse-livechannels.component.css']
})
export class BrowsePage_LiveChannelsComponent {
    
    livestreamcards:LivestreamCard[] = [];

    constructor() {
        for (var livestreamcard of mock_livestreamcards) {
            this.livestreamcards.push(new LivestreamCard(livestreamcard));
        }
    }
}