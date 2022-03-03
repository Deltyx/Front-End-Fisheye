import MediaFactory from "../factories/MediaFactory.js";

export default class Portfolio {
    constructor(photographer) {
        this.allMedia = [];
        this.photographer = photographer;
        this.totalLikes = 0;
    }

    sortByLikes() {
        this.allMedia.sort((a, b) => b.likes - a.likes);
        this.displayGallery()
    }

    sortByTitle() {
        this.allMedia.sort((a, b) => a.title.localeCompare(b.title));
        this.displayGallery();
    }

    calcTotalLikes() {
        this.totalLikes = this.allMedia.reduce((total, media) => total += media.likes, 0);
    }

    hydrate(data) {
        let factory = new MediaFactory();
        const medias = data.filter(data => data.photographerId == this.photographer.id);
        medias.forEach(media => {
            this.allMedia.push(factory.build(media, this.photographer));
        })
    }

    display() {
        this.displayProfile();
        this.displayGallery();
        this.displayTotalLikes();
    }

    renderProfile() {
        return  `
            <div class="profile_info">
                <h2>${this.photographer.name}</h2>
                <h3>${this.photographer.city}, ${this.photographer.country}</h3>
                <h4>${this.photographer.tagline}</h4>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img class="profile_img" src="assets/photographers/${this.photographer.portrait}"></img>
                `
    }

    renderFilter(state) {
        if (state == "Popularity") {
            return `
            <div class="dropdown_filter">
            <button class="filter_btn">Popularité</button>
                <div class="dropdown-content">
                <a href="#">Date</a>
                <a href="#">Titre</a>
                </div>
            </div> 
            `
        } else if (state == "Date") {
            return `
            <div class="dropdown_filter">
            <button class="filter_btn">Date</button>
                <div class="dropdown-content">
                <a href="#">Titre</a>
                <a href="#">Popularité</a>
                </div>
            </div> 
            `
        } else {
            return `
            <div class="dropdown_filter">
            <button class="filter_btn">Titre</button>
                <div class="dropdown-content">
                <a href="#">Popularité</a>
                <a href="#">Date</a>
                </div>
            </div> 
            `
        }
    }

    renderGallery() {
        let html = '';

        this.allMedia.forEach(media =>
            {
                html += media.render();
            });

        return html;
    }

    renderTotalLikes() {
        this.calcTotalLikes();
        return  `
            <div class="profile_sub_info">
                <div class="profile_sub_info--likes">
                    <h3>${this.totalLikes}</h3>
                    <i class="fas fa-heart"></i>
                </div>
                <h3>${this.photographer.price}€ / jour</h3>
            </div>
                `
    }

    displayProfile() {
        document.getElementById('banner').innerHTML = this.renderProfile();
    }

    displayGallery() {
        document.getElementById('gallery').innerHTML = this.renderGallery();
    }

    displayTotalLikes() {
        document.getElementById('info').innerHTML = this.renderTotalLikes();
    }
}