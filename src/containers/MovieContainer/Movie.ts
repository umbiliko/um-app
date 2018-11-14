export default interface Movie {
    audience: string;
    consensus: string;
    fresh: boolean;
    id: number;
    poster: string;
    rating: string;
    title: string;
}

export type MovieDetails = Pick<Movie, 'consensus' |  'title' | 'fresh' | 'rating' | 'audience' | 'poster'>;

export type MovieItem = Pick<Movie, 'id' | 'title' | 'rating'>;

export interface MovieList extends Array<MovieItem> { }

export type MovieReview = Movie;
