function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        let html = '';

        
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const pht = document.createElement( 'h2' );
        const loc = document.createElement( 'h3' );
        const tag = document.createElement( 'h3' );
        const prc = document.createElement( 'h3' );
        const link = document.createElement( 'a' );

        img.setAttribute("src", picture);
        link.setAttribute("href", "photographer.html"+`?id=${id}`);

        article.classList.add("profile_article");
        img.classList.add("profile_img");
        pht.classList.add("profile_name");
        loc.classList.add("profile_location");
        tag.classList.add("profile_tagline");
        prc.classList.add("profile_price");
        link.classList.add("profile_link");

        pht.textContent = name;
        loc.textContent = city + ", " + country;
        tag.textContent = tagline;
        prc.textContent = price + "€/jour";

        article.appendChild(link);
        link.appendChild(img);
        article.appendChild(pht);
        article.appendChild(loc);
        article.appendChild(tag);
        article.appendChild(prc);
        return (article);
    }

    return { name, picture, city, country, tagline, price, id, getUserCardDOM }
}