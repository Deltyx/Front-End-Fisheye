import Media from "./Media.js";

export default class Video extends Media {
    constructor(media, photographer) {
        super(media, photographer);
        this.video = media.video;
    }

    render() {
        return `
        <article class="gallery_article" id="${this.id}">
            <video class="gallery_item" controls>
                <source src="assets/images/${this.photographer.name}/${this.video}" type="video/mp4">
                Votre navigateur ne supporte pas les vidéos HTML.
            </video>
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
    renderSlider() {
        return ` 
        <video class="gallery_item" controls>
            <source src="assets/images/${this.photographer.name}/${this.video}" type="video/mp4">
            Votre navigateur ne supporte pas les vidéos HTML.
        </video>
        <h3>${this.title}</h3>
        `
    }
}