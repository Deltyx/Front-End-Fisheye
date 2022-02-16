//Mettre le code JavaScript lié à la page photographer.html
function getId() {
    return new Proxy(new URLSearchParams(window.location.search), 
        { get: (searchParams, prop) => searchParams.get(prop) }).id;  
}

function displayProfile(profile) {
    
}

async function init() {

    const id = getId();
    const data = await getData();
    const medias = data.media.filter(data => data.photographerId == id);
    const profile = data.photographers.filter(data => data.id == id);
    const Profile = new Photographer(profile); 

    console.log(id);
    console.log(data);
    console.log(medias);
    console.log(profile);
    console.log(Profile);
};

init();