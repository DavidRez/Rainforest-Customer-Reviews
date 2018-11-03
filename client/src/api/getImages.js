const getImages = (reviewId) => {
    return fetch('http://localhost:5000/api/images/' + reviewId)
        .then(response => {
            return response.json();
        })
    };

export default getImages;