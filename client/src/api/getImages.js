const getImages = (reviewId) => {
    return fetch('/cr/images/' + reviewId)
        .then(response => {
            return response.json();
        })
    };

export default getImages;