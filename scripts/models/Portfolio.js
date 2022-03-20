import MediaFactory from "../factories/MediaFactory.js";

export default class Portfolio {
    constructor(photographer) {
        this.allMedia = [];
        this.photographer = photographer;
        this.totalLikes = 0;
        this.options = {
            title: 'Titre',
            popularity: 'Popularité',
            date: 'Date'
        };
    }

    sortByPopularity() {
        this.allMedia.sort((a, b) => b.likes - a.likes);
        this.displayGallery()
    }

    sortByTitle() {
        this.allMedia.sort((a, b) => a.title.localeCompare(b.title));
        this.displayGallery();
    }

    sortByDate() {
        this.allMedia.sort((a, b) => new Date(a.date) - new Date(b.date));
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
            <img class="profile_img" src="assets/photographers/${this.photographer.portrait}" alt="${this.photographer.name}"></img>
                `
    }

    listen() {
        this.listenDropdown();
        this.listenForSlider();
    }

    listenDropdown() {
        let btn = document.getElementById('filter_btn');
        let btn_dropdown = document.getElementById('filter_dropdown');
        btn.addEventListener('click', () => {
            btn.style.display = 'none';
            btn_dropdown.style.display = 'block';
            document.querySelectorAll('.filter_button-options').forEach(options => {
                options.addEventListener('click', () => {
                    let order = options.getAttribute('data-filter');
                    let methodName = 'sortBy' + order;
                    this[methodName]();
                    btn.style.display = 'flex';
                    btn_dropdown.style.display = 'none';
                    btn.innerHTML = `
                    ${this.options[order.toLowerCase()]}
                    <i class="fa-solid fa-chevron-down"></i>
                    `;
                })
            })
        })
    }

    listenForLikes() {
        this.allMedia.forEach(media => {
            document.querySelector(`article[id='${media.id}'] .fas`).addEventListener('click', () => {
                media.likeMedia();
                this.displayGallery();
                this.displayTotalLikes();
            })
            document.querySelector(`article[id='${media.id}'] .fas`).onkeydown = function(e) {
                if(e.key === "Enter") { 
                    document.activeElement.click();
                }
            }
        })
    }

    listenForImg() {
        this.allMedia.forEach(media => {
            document.querySelector(`article[id='${media.id}'] .gallery_item`).addEventListener('click', () => {
                this.currentIndex = this.allMedia.findIndex(item => media.id == item.id);
                this.displaySlider();
            })
        })
    }

    goToNext() {
        if(this.currentIndex == this.allMedia.length-1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }
        this.displaySlider();
    }

    goToPrevious() {
        if(this.currentIndex == 0) {
            this.currentIndex = this.allMedia.length - 1;
        } else {
            this.currentIndex--;
        }
        this.displaySlider(); 
    }

    listenForSlider() {
        const sliderLeft = document.getElementById('slider-left');
        const sliderRight = document.getElementById('slider-right');
        const sliderCross = document.getElementById('slider-cross');
        
        sliderLeft.addEventListener('click', () => {
            this.goToPrevious();
        })
        sliderRight.addEventListener('click', () => {
            this.goToNext();
        })
        sliderCross.addEventListener('click', () => {
            document.getElementById('slider').style.display = 'none';
        })
        // Simule un clic lorsque l'utilisateur appui sur la touche Enter si le chevron est focus
        sliderLeft.onkeydown = function(e) {
            if(e.key === "Enter" || e.key === "ArrowLeft") { 
                document.activeElement.click();
            }
        };
        sliderRight.onkeydown = function(e) {
            if(e.key === "Enter" || e.key === "ArrowRight") { 
                document.activeElement.click();
            }
        };
        sliderCross.onkeydown = function(e) {
            if(e.key === "Enter") { 
                document.activeElement.click();
            }
        };
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
        this.listenForLikes();
        this.listenForImg();
    }

    displayTotalLikes() {
        document.getElementById('info').innerHTML = this.renderTotalLikes();
    }

    displaySlider() {
        document.getElementById('slider').style.display = 'flex';
        let media = this.allMedia[this.currentIndex];
        document.getElementById('slider-img').innerHTML = media.renderSlider();
    }
}