export type MovieCategory = 'top_rated' | 'popular' | 'upcoming' | 'now_playing'

export interface IMovie {
  adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path?: string
  release_date?: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IMovieResult {
  dates: { maximum: string; minimum: string }
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}

export interface IMovieDetail {
  adult: boolean
  backdrop_path?: string
  belongs_to_collection: {
    id: number
    name: string
    poster_path?: string
    backdrop_path?: string
  }
  budget: number
  genres: { id: number; name: string }[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path?: string
  production_companies: {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }[]
  production_countries: { iso_3166_1: string; name: string }[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: {
    english_name: string
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface ICast {
  adult: boolean
  gender: number | null
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  cast_id: number
  character: string
  credit_id: string
  order: number
}

interface ICrew {
  adult: boolean
  gender: number | null
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: any | null
  credit_id: string
  department: string
  job: string
}

export interface IMovieCredits {
  id: number
  cast: ICast[]
  crew: ICrew[]
}

export interface IMovieGenre {
  id: number
  name: string
}

export interface IMovieGenres {
  genres: IMovieGenre[]
}

