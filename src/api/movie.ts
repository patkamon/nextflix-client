export async function getMovieList() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${baseUrl}/show/movie_list`);
  if (!res.ok) {
    return null
  };
  return res.json();
}

