const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGFmYjljNjJkNTk2ODJkNGQ3OWU0MDUwMjUyZGIzZCIsIm5iZiI6MTcyMjk0NjAyNC4yMzEwNjYsInN1YiI6IjY2YjIwZWUyYzgxZDQ0YjA1NTJmNWM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-S43HmLmjhtVmkQh20BY55229WCSvN8Xaths_3QANtU'
    }
};

const MoviesCollectiondata = async (page = 1) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=60afb9c62d59682d4d79e4050252db3d&language=en-US&page=${page}`, options)
        const data = await response.json()
        console.log(data);
        const collectionMovies = document.getElementById('collectionMovies')
        collectionMovies.innerHTML = ''
        collectionMovies.innerHTML = data.results.map((item) => {
            return (
                `<div class='movieData'>
                <img src='https://image.tmdb.org/t/p/w780${item.poster_path}'>
                <h4>${item.original_title}</h4>
                <p>Release Date: ${item.release_date}</p>
                <button onclick='getMovieData(${item.id})' class='moreinfo'>More Info</button>
                </div>`
            )
        }).join('')
    } catch (error) {
        console.log(error);

    }


}

const searchMovieList = async (search, page = 1) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${page}`, options)
        const data = await res.json()
        const collectionMovies = document.getElementById('collectionMovies')
        collectionMovies.innerHTML = ''
        collectionMovies.innerHTML = data.results.map((item) => {
            return (
                `<div class='movieData'>
                <img src='https://image.tmdb.org/t/p/w780${item.poster_path}'>
                <h4>${item.original_title}</h4>
                <p>Release Date: ${item.release_date}</p>
                <button onclick='getMovieData(${item.id}' class='moreinfo'>More Info</button>
                </div>`
            )
        }).join('')
    } catch (error) {
        console.log(error);

    }
}


let pageNumber = 1;
const pagesCount = 500;
const prevPage = document.getElementById('prevPage')
const nextPage = document.getElementById('nextPage')

const movieQuery = getQueryParameter('movie');

if (movieQuery == null) {
    MoviesCollectiondata(pageNumber)

}
else {
    const encodedQuery = encodeURIComponent(movieQuery);
    searchMovieList(encodedQuery, pageNumber)

}




prevPage.addEventListener('click', (e) => {
    if (pageNumber > 1) {
        pageNumber -= 1
        const movieQuery = getQueryParameter('movie');
        if (movieQuery === null) {
            MoviesCollectiondata(pageNumber)

        }
        else {
            const encodedQuery = encodeURIComponent(movieQuery);
            searchMovieList(encodedQuery, pageNumber)

        }


    }
})

nextPage.addEventListener('click', (e) => {
    pageNumber += 1
    const movieQuery = getQueryParameter('movie');
    if (movieQuery == null) {
        MoviesCollectiondata(pageNumber)

    }
    else {
        searchMovieList(movieQuery, pageNumber)

    }
})

window.addEventListener('beforeunload', function () {
    // Remove the query parameter from the URL without reloading the page

    window.location.href = 'MovieSearchApp.htm'
});



function searchmovieFun() {

    const searchName = document.getElementById('search').value
    if (searchName == "") {
        alert('Please enter value in search input')
        return
    }
    window.location.href = `MovieSearchApp.html?movie=${searchName}`;

}

function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(name)
}

const getMovieData = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=60afb9c62d59682d4d79e4050252db3d`)
    const data = await res.json()
    console.log(data);
    const modal = document.getElementById('modal')

    console.log(modal);
    modal.classList.remove = 'modal'

    modal.className = 'modalShow'

    const posterImg = document.getElementById('posterImg')
    posterImg.setAttribute('src', `https://image.tmdb.org/t/p/w780${data.poster_path}`)

    const title = document.getElementById('title')
    title.innerHTML = `<h3>${data.title}</h3>`

    const details = document.getElementById('details')
    const genres = data.genres.map((name) => {
        return name.name
    }).join(', ')

    details.innerHTML = `<div>
    <h3>${data.title}</h3>
    <h4>${data.tagline}</h4>
    <p>${data.status}</p>
    <p>${data.release_date}</p>
    <p>${genres}</p>

    <h5>${data.overview}</h5>


    </div>
    `
}

const close = document.getElementById('close')

close.addEventListener('click', (e) => {
    modal.classList.remove = 'modalShow'

    modal.className = 'modal'
})