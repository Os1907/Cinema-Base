import { Movie } from "@/app/explore/[id]/page";

export interface prop {
    value?:{
            page: number,
            results:  [{}]}
    title?:string,
    nav?:string
    component?:React.JSX.Element
    data?:  resultsMovie[];
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
    name?: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    first_air_date?: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface ItemType {
    profile_path?: string; 
    id?: number; 
    name?: string; 
  }
  
  export interface Itralier {
    
          iso_639_1: string;
          iso_3166_1: string;
          name:   string;
          key: string;
          site: string;
          size: number;
          type: string;
          official: boolean,
          published_at:string;
          id: string;

  }

 export interface MovieData{
    page:number;
    results:resultsMovie[]
  }


  export interface Iuser{
    avatar: {}
    id: number
    include_adult: boolean
    iso_639_1: string
    iso_3166_1: string
    name: string
    username: string
      }

     export interface Genre {
        id: number;
        name: string;
      }
      
     export interface ProductionCompany {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
      }
      
     export interface ProductionCountry {
        iso_3166_1: string;
        name: string;
      }
      
     export interface SpokenLanguage {
        english_name: string;
        iso_639_1: string;
        name: string;
      }
    export  interface MovieData {
        adult: boolean;
        backdrop_path: string | null;
        belongs_to_collection: null | any
        budget: number;
        genres: Genre[];
        homepage: string | null;
        id: number;
        imdb_id: string;
        origin_country: string[];
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string | null;
        production_companies: ProductionCompany[];
        production_countries: ProductionCountry[];
        release_date: string;
        revenue: number;
        runtime: number | null;
        spoken_languages: SpokenLanguage[];
        status: string;
        tagline: string | null;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
        original_name:string | null
        first_air_date: string | null
      }
      