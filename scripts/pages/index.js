async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
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