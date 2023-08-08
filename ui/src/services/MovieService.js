export async function getAllMovies() {

    const response = await fetch('/api/movies');
    return await response.json();
}

export async function createMovie(data) {
    const response = await fetch(`/api/movie`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({movie: data})
    })
    return await response.json();
}

export async function deleteMovie(movieId) {
    const response = await fetch(`/api/movie/${movieId}`, {method: 'DELETE'})
    return await response.json();
}

export async function editMovie(data) {
    const response = await fetch(`/api/movie`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({movie: data})
    })
    return await response.json();
}

export async function fetchSettings() {

    const response = await fetch('/api/settings');
    return await response.json();
}
