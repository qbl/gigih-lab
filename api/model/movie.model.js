const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({ title: 'string',
    year: 'number'},
    { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}});

const Movie = mongoose.model('movies', movieSchema);

module.exports = {
    Movie
}
