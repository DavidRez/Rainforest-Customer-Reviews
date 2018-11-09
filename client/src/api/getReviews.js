const getReviews = (productId) => {
    return fetch('/cr/reviews/' + productId)
        .then(response => {
            return response.json();
        })
    };

export default getReviews;