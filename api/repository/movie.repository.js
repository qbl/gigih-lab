const { connect, disconnect } = require('../config/db.config');
const { Movie } = require('../model/movie.model');
const logger = require('../logger/api.logger');

class MovieRepository {

    constructor() {
        connect();
    }

    async getMovies() {
        const movies = await Movie.find({});
        console.log('movies:::', movies);
        return movies;
    }

    async createMovie(movie) {
        let data = {};
        try {
            data = await Movie.create(movie);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateMovie(movie) {
        let data = {};
        try {
            data = await Movie.updateOne(movie);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteMovie(movieId) {
        let data = {};
        try {
            data = await Movie.deleteOne({_id : movieId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new MovieRepository();