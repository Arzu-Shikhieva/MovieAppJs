import {elements} from "../base";

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearResults = () => {
    elements.movieList.innerHTML = '';
}

export const displayResults = (keyword, data) => {
    data.results.forEach(movie => {
        const html = `
        <li class="media mb-3">
                <img class="mr-3" src="https://www.themoviedb.org/t/p/w92/${movie.poster_path}" onerror="this.src='https://via.placeholder.com/92x138'" alt="${movie.title}">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">
                        <span class="badge badge-primary">${movie.vote_average}</span> 
                        <a href="#${movie.id}">${movie.title}</a>
                    </h5>
                      <p>${movie.overview}</p>
                </div>
            </li>
        `;

        elements.movieListHeader.innerHTML = `with name <strong>${keyword}</strong> is found <strong>${data.total_results}</strong> results.`;
        elements.movieListContainer.classList.add('d-block');
        elements.movieList.insertAdjacentHTML('beforeend', html);
    })
}
