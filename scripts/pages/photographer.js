//Mettre le code JavaScript lié à la page photographer.html
function getId() {
    return new Proxy(new URLSearchParams(window.location.search), 
        { get: (searchParams, prop) => searchParams.get(prop) }).id;  
}



async function init() {

    const id = getId();
    const { data } = await getData();
    //const medias = data.filter(data => data.photographerId == id);

    console.log(id);
    console.log(data);
    //console.log(medias);
};

init();