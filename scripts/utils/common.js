async function getData() {
    // Penser à remplacer par les données récupérées dans le json
    return new Promise((resolve, reject) => {
        fetch('data/photographers.json')
            .then(data => data.json())
            .then(data => {
                resolve(data);
            })
            .catch(reject);
    });
}