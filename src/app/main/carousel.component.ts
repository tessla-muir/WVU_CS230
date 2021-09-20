import { Component } from "@angular/core";

@Component({
    selector: 'app-carousel',
    templateUrl: 'carousel.component.html',
    styleUrls :['carousel.component.css']
})
export class CarouselComponent {
    streamer1:string = "SmiteGame";
    streamer2:string = "SmallAnt";
    streamer3:string = "xQcOW";

    startLink:string = "https://player.twitch.tv/?channel=";
    endLink:string = "";
    link1:string = this.startLink + this.streamer1 + this.endLink;
    link2:string = this.startLink + this.streamer2 + this.endLink;
    link3:string = this.startLink + this.streamer3 + this.endLink;

}