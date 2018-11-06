const getReviews = (productId) => {
    return fetch('http://localhost:5000/api/reviews/' + productId)
        .then(response => {
            return response.json();
        })
    };

export default getReviews;