import { getData } from '../utils/common.js';
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
    portfolio.listen();

    document.getElementById('modal-label').innerText =  "Contactez moi \n" + portfolio.photographer.name;

    document.getElementById('form').addEventListener('submit', function (e) {
        e.preventDefault();
        console.log({
            firstName: document.querySelector("#first_name").value,
            lastName: document.querySelector("#last_name").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value
      });
    });
}

init();

