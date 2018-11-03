const getReviews = (productId) => {
    return Promise.resolve(
        [{
            "id":1,
            "customer_id":644,
            "customer_username":"Bobinette Ikins",
            "review_date":"2017-12-30 07:08:16",
            "rating":1,
            "title":"quam sapien varius ut blandit",
            "body":"at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur",
            "helpful_count":28,
            "product_id":9,
            "product_version":"small"
        }]
    );
}

export default getReviews;