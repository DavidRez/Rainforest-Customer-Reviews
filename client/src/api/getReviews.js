const getReviews = (productId) => {
    console.log('original getreviews!');
    return fetch('http://localhost:5000/api/reviews/' + productId)
        .then(response => {
            return response.json();
        })
    };

export default getReviews;