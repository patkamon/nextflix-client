export async function getMovieList() {
  const res = await fetch(`http://localhost:3000/show/movie_list`);
  if (!res.ok) {
    return null
  };
  return res.json();
}

