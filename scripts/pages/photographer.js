import { Media as Media } from '../models/Media.js';
import { Portfolio as Portfolio } from '../models/Portfolio.js';
import { Photographer as Photographer } from '../models/Photographer.js';

function getId() {
    return new Proxy(new URLSearchParams(window.location.search), 
        { get: (searchParams, prop) => searchParams.get(prop) }).id;  
}

async function init() {

    const data = await getData();
    const RawMedias = data.media.filter(data => data.photographerId == getId());
    const Medias = [];
    RawMedias.forEach(media => {
        Medias.push(new Media(media));
    });

    const currentPortfolio = new Portfolio(
        new Photographer(data.photographers.filter(data => data.id == getId())[0]), 
        Medias
    );

    currentPortfolio.displayProfile();
    currentPortfolio.displayGallery();
    currentPortfolio.displayTotalLikes();

    console.log(currentPortfolio);

};

init();

