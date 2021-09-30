import { Component } from "@angular/core";


@Component({
    selector: 'app-stream-section',
    templateUrl: 'stream-section.component.html',
    styleUrls: ['stream-section.component.css']
})
export class LivestreamPage_StreamSectionComponent {

    streamPicture = "https://static-cdn.jtvnw.net/previews-ttv/live_user_smitegame-440x248.jpg";
    streamTitle:string = "streaming everyday until I feel content";
    streamerName:string = "SmiteGame";
    streamerProfilePicture = "https://static-cdn.jtvnw.net/jtv_user_pictures/94784297-9634-41c4-848c-a359e9dca7d8-profile_image-50x50.png";
    streamGame:string = "SMITE";
}

