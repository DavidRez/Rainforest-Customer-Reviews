const getReviews = (productId) => {
    return fetch('/api/reviews/' + productId)
        .then(response => {
            return response.json();
        })
    };

export default getReviews;