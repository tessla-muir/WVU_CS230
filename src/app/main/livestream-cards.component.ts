import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-livestream-cards',
    templateUrl: 'livestream-cards.component.html',
    styleUrls :['livestream-cards.component.css']
})
export class LiveSteamCards {

    @Input()
    streamPicture! :string;
    @Input()
    streamTitle! :string;
    @Input()
    streamerName! :string;
    @Input()
    streamerProfilePicture! :string;
    @Input()
    streamGame! :string;

}