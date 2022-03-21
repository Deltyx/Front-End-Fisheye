import photographerFactory from "../factories/photographer.js"
import { getData } from "../utils/common.js"

async function displayData(photographers) {
    let html = '';
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        html += photographerModel.getUserCardDOM();
    });
    document.getElementById('photographer').innerHTML = html;
}

async function init() {
    // Récupère les datas des photographes
    const {
        photographers
    } = await getData();
    displayData(photographers);
}

init();