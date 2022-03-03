import Media from '../models/Media.js';
import Portfolio from '../models/Portfolio.js';
import Photographer from '../models/Photographer.js';

function getId() {
    return new Proxy(new URLSearchParams(window.location.search), 
        { get: (searchParams, prop) => searchParams.get(prop) }).id;  
}

async function init() {

    const data = await getData();
    const photographer = new Photographer(data.photographers.find(data => data.id == getId()));
    const portfolio = new Portfolio(photographer);

    portfolio.hydrate(data.media);
    portfolio.display();

};

init();

