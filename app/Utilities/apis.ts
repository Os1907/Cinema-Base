
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjk4ZDg4NTVkNDBkNTY4MjBlNDA1ZDY3MjkxZTEzZCIsInN1YiI6IjY1YzI1MDNhOGU4ZDMwMDE2Mjc4MjIxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSNy7xFnu7Uu5mqfDRbocxJ2Gtsc7aBZIfrgxcxT0do'
    }
  };
export  async function popular(page: number) {

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export  async function topRated(page: number) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
export  async function Trend() {
  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getMovie( id: number) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
export async function videoLink(id: number) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
export async function similar(id: number) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
export async function moviesList() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
export async function moviesBySearch(name:string , page: number) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=${page}`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function crew( id: number) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
export  async function topShows(page: number) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
// https://api.themoviedb.org/3/tv/1396?language=en-US
export async function getSeries( id: number , page?: string) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}${page}?language=en-US`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
export async function seriesBySearch(name:string , page: number) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/tv?query=${name}&include_adult=false&language=en-US&page=${page}`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
export  async function TrendSeries() {
  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export const urlImage: string = "https://image.tmdb.org/t/p/w500/";

