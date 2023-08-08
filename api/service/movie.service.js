const movieRepository  = require('../repository/movie.repository');

class MovieService {

    constructor() {}

    async getMovies() {
        return await movieRepository.getMovies();
    }

    async createMovie(movie) {
        return await movieRepository.createMovie(movie);
    }

    async updateMovie(movie) {
        return await movieRepository.updateMovie(movie);
    }

    async deleteMovie(movieId) {
        return await movieRepository.deleteMovie(movieId);
    }

}

module.exports = new MovieService();