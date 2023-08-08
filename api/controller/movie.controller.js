const movieService  = require('../service/movie.service');
const logger = require('../logger/api.logger');

class MovieController {

    async getMovies() {
        logger.info('Controller: getMovies')
        return await movieService.getMovies();
    }

    async createMovie(movie) {
        logger.info('Controller: createMovie', movie);
        return await movieService.createMovie(movie);
    }

    async updateMovie(movie) {
        logger.info('Controller: updateMovie', movie);
        return await movieService.updateMovie(movie);
    }

    async deleteMovie(movieId) {
        logger.info('Controller: deleteMovie', movieId);
        return await movieService.deleteMovie(movieId);
    }
}
module.exports = new MovieController();
