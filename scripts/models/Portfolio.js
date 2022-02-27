export class Portfolio {
    constructor(photographer, media) {
        this.allMedia = media;
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
                if(media.video)
                {
                    html += `
                    <article class="gallery_article">
                        <video class="gallery_item" controls>
                            <source src="assets/images/${this.photographer.name}/${media.video}" type="video/mp4">
                            Votre navigateur ne supporte pas les vidéos HTML.
                        </video>
                        <div class="gallery_item_info">
                            <h3>${media.title}</h3>
                            <div class="gallery_item_likes">
                                <h3>${media.likes}</h3>
                                <i class="fas fa-heart"></i> 
                            </div> 
                        </div>
                    </article>                     
                        `
                } else {
                    html += `
                    <article class="gallery_article">
                        <img class="gallery_item" src="assets/images/${this.photographer.name}/${media.image}"></img>
                        <div class="gallery_item_info">
                            <h3>${media.title}</h3>
                            <div class="gallery_item_likes">
                                <h3>${media.likes}</h3>
                                <i class="fas fa-heart"></i> 
                            </div>
                        </div>
                    </article>                     
                        `
                }
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