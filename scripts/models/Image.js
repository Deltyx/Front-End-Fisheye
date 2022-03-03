import Media from "./Media.js";

export default class Image extends Media {
    constructor(media, photographer) {
        super(media, photographer);
        this.image = media.image;
    }

    render() {
        return `                    
        <article class="gallery_article">
            <img class="gallery_item" src="assets/images/${this.photographer.name}/${this.image}"></img>
            <div class="gallery_item_info">
                <h3>${this.title}</h3>
                <div class="gallery_item_likes">
                    <h3>${this.likes}</h3>
                    <i class="fas fa-heart"></i> 
                </div>
            </div>
        </article>                     
        `
    }

}