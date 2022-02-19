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
            <h2>${this.photographer.name}</h2>
            <h3>${this.photographer.city}, ${this.photographer.country}</h3>
            <h3>${this.photographer.tagline}</h3>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img class="profile_img" src="assets/photographers/${this.photographer.portrait}"></img>
                `
    }

    renderGallery() {
        let html = '';

        this.allMedia.forEach(media =>
            {
                html += `
                    <img class="gallery_img" src="assets/images/${this.photographer.name}/${media.image}"></img>
                    <div>${media.title}</div>
                    <div>${media.likes}</div>                        
                        `
            });

        return  html;
    }
}