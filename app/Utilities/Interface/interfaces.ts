export interface prop {
    value?:{
            page: number,
            results:  [{}]}
    title:string,
    nav?:string
    component?:React.JSX.Element
    data?:  Movie[];
}
export interface resultsMovie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    name: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    first_air_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
