import Media from "./Media.js";

export default class Image extends Media {
    constructor(media, photographer) {
        super(media, photographer);
        this.image = media.image;
    }

    render() {
        return `                    
        <article class="gallery_article" id="${this.id}">
            <img tabindex="1" class="gallery_item" src="assets/images/${this.photographer.name}/${this.image}" alt="${this.title}"></img>
            <div class="gallery_item_info">
                <h3>${this.title}</h3>
                <div class="gallery_item_likes">
                    <h3>${this.likes}</h3>
                    <i tabindex="1" class="fas fa-heart" aria-label="likes"></i> 
                </div>
            </div>
        </article>                     
        `
    }
    renderSlider() {
        return ` 
        <img class="slider_item" src="assets/images/${this.photographer.name}/${this.image}" alt="${this.image}"></img>
        <h3>${this.title}</h3>
        `
    }
}