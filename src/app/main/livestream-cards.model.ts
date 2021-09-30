export class LivestreamCard {
    streamPicture: string;
    streamTitle: string;
    streamerName: string;
    streamerProfilePicture: string;
    streamGame: string;

    constructor({ streamPicture, streamTitle, streamerName, streamerProfilePicture, streamGame }:
        { streamPicture: string, streamTitle: string, streamerName: string, streamerProfilePicture: string, streamGame: string }) {
            this.streamPicture = streamPicture;
            this.streamTitle = streamTitle;
            this.streamerName = streamerName;
            this.streamerProfilePicture = streamerProfilePicture;
            this.streamGame = streamGame;
    }
}