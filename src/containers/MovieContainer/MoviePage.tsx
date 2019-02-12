import * as React from 'react';
import { Suspense } from 'react';
import Spinner from '../../components/Spinner';
import MovieDetails from './MovieDetails';
import MovieReview from './MovieReview';
import useMovie from './useMovie';
import Movie from './Movie';

export default (props: { id: number; }) => {
    const movie: Movie | null = useMovie(props.id);
    return (
        <div className="MovieDetails">
            <Suspense fallback={<Spinner size="lg" />}>
                {movie && <MovieDetails {...movie} />}
                {movie && <h1>{movie!.title}</h1>}
                {movie && <MovieReview {...movie} />}
            </Suspense>
        </div>
    );
};
