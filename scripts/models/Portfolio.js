class Portfolio {
    constructor(photographer, mediaRaw) {
        this.allMedia = mediaRaw;
        this.photographer = photographer;
    }

    calcLike() {
        let totalLike = 0;
        for (let i = 0; i < this.allMedia.length; i++) {
            totalLike += this.allMedia[i].likes;
        }
        return totalLike;
    }

    renderProfile() {
        return  `
            <div class="profile_info">
                <h2>${this.photographer.name}</h2>
                <h3>${this.photographer.city}, ${this.photographer.country}</h3>
                <h3>${this.photographer.tagline}</h3>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img class="profile_img" src="assets/photographers/${this.photographer.portrait}"></img>
                `
    }

    renderGallery() {
        let html = '';

        this.allMedia.forEach(media =>
            {
                html += `
                    <article class="gallery_article">
                        <img class="gallery_img" src="assets/images/${this.photographer.name}/${media.image}"></img>
                        <div>${media.title}</div>
                        <div>${media.likes}</div> 
                    </article>                     
                        `
            });

        return  html;
    }

    renderTotalLikes() {
        let totalLike = 0;
        for (let i = 0; i < this.allMedia.length; i++) {
            totalLike += this.allMedia[i].likes;
        }
        return  `
            <div class="profile_sub_info">
                <h3>${totalLike}</h3>
                <h3>${this.photographer.price}€ / jour</h3>
            </div>
                `
    }
}