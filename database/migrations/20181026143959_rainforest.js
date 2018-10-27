exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('product_info', (table) => {
        table.increments('id').primary();
        table.string('product_name');
      }),
      knex.schema.createTable('customer_review', (table) => {
        table.increments('id').primary();
        table.string('customer_id');
        table.string('customer_username');
        table.string('review_date');
        table.integer('rating');
        table.string('title');
        table.string('body',5000);
        table.integer('helpful_count');
        table.integer('product_id').unsigned().references('product_info.id');
        table.string('product_version');
      }),
      knex.schema.createTable('customer_review_images', (table) => {
        table.increments('id').primary();
        table.string('location_url');
        table.integer('review_id').unsigned().references('customer_review.id');
      })
    ]);
  };

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('customer_review'),
    knex.schema.dropTable('customer_review_images'),
    knex.schema.dropTable('product_info')
  ]);
};
