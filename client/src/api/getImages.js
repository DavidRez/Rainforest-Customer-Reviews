const getImages = (reviewId) => {
    return fetch('/api/images/' + reviewId)
        .then(response => {
            return response.json();
        })
    };

export default getImages;