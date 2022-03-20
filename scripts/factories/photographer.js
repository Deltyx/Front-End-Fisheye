function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        return `
        <article class="profile_article">
            <a href="photographer.html?id=${id}" class="profile_link">
                <img src="${picture}" class="profile_img">
                <h2 class="profile_name">${name}</h2>
            </a>
            <h3 class="profile_location">${city}, ${country}</h3>
            <h3 class="profile_tagline">${tagline}</h3>
            <h3 class="profile_price">${price}€/jour</h3>
        </article>
        `;
    }

    return { name, picture, city, country, tagline, price, id, getUserCardDOM }
}