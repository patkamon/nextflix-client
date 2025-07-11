export async function getMovieList() {
    const res = await fetch(`http://localhost:3000/show/movie_list`);
    if (!res.ok) throw new Error('Failed to fetch movies');
    return res.json();
  }

