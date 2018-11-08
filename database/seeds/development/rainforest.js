const customerReviewData = require('../../customer_review.js');
const productInfoData = require('../../product_info.js');
const customerReviewImagesData = require('../../customer_review_images.js');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customer_review_images').del()
  .then(() => {
    return knex('customer_review').del();
  })
  .then(() => {
    return knex('product_info').del();
  })
  .then(() => {
    return knex('product_info').insert(productInfoData);
  })
  .then(() => {
    setTimeout(() => {return knex('customer_review').insert(customerReviewData);}, 500);
  })
  .then(() => {
    setTimeout(() => {return knex('customer_review_images').insert(customerReviewImagesData);}, 500);
  })
};
