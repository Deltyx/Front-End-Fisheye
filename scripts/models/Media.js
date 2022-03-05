export default class Media {
    constructor(media, photographer) {
        this.id = media.id;
        this.photographer = photographer;
        this.title = media.title;
        this.likes = media.likes;
        this.date = media.date;
        this.price = media.price;
        this.isLiked = false;
    }

    likeMedia() {
        if(this.isLiked) {
            this.likes -= 1;
        } else {
            this.likes += 1;
        }
        this.isLiked = ! this.isLiked;
    }

}