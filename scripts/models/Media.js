export class Media {
    constructor(media) {
        this.id = media.id;
        this.photographerId = media.photographerId;
        this.title = media.title;
        this.image = media.image;
        this.video = media.video;
        this.likes = media.likes;
        this.date = media.date;
        this.price = media.price;
        this.isLiked = false;
    }

}