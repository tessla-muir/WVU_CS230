export class CategoryCard {
    gamePicture:string;
    streamGame:string;

    constructor({gamePicture, streamGame}:
        {gamePicture:string,streamGame:string}) {
            this.gamePicture = gamePicture;
            this.streamGame = streamGame;
    }
}

