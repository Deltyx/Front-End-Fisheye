async function getData() {
    return new Promise((resolve, reject) => {
        fetch('data/photographers.json')
            .then(data => data.json())
            .then(data => {
                resolve(data);
            })
            .catch(reject);
    });
}

export { getData };