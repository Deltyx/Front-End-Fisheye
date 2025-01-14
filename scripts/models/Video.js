import Media from "./Media.js";

export default class Video extends Media {
    constructor(media, photographer) {
        super(media, photographer);
        this.video = media.video;
    }

    render() {
        return `
        <article class="gallery_article" id="${this.id}">
            <video tabindex="0" class="gallery_item" controls>
                <source src="assets/images/${this.photographer.name}/${this.video}" type="video/mp4" alt="${this.title}">
                Votre navigateur ne supporte pas les vidéos HTML.
            </video>
            <div class="gallery_item_info">
                <h3>${this.title}</h3>
                <div class="gallery_item_likes">
                    <h3>${this.likes}</h3>
                    <span tabindex="0" class="fas fa-heart" aria-label="likes"></span> 
                </div> 
            </div>
        </article>                     
        `
    }
    renderSlider() {
        return ` 
        <video class="slider_item" controls>
            <source src="assets/images/${this.photographer.name}/${this.video}" type="video/mp4" alt="${this.video}">
            Votre navigateur ne supporte pas les vidéos HTML.
        </video>
        <h3>${this.title}</h3>
        `
    }
}