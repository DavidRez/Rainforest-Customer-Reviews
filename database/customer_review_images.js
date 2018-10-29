const imagelinks = require('./imagelinks.js');

let images = [];

for (let i = 0; i < imagelinks.length; i++) {
    let random = Math.floor(Math.random() * (31 - 1) + 1);
    images.push({location_url:imagelinks[i], review_id: random})
}

module.exports = images;