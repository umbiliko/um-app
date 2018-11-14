import * as React from 'react';
import { Suspense } from 'react';
import Spinner from '../../components/Spinner';
import MoviePoster from './MoviePoster';
import MovieMetrics from './MovieMetrics';
import useMovie from './useMovie';
import Movie from './Movie';

export default (props: { id: number; }) => {
    const movie: Movie | null = useMovie(props.id);
    return (
        <div className="MovieDetails">
            <Suspense fallback={<Spinner size="lg" />}>
                {movie && <MoviePoster src={movie!.poster} />}
                {movie && <h1>{movie!.title}</h1>}
                {movie && <MovieMetrics {...movie} />}
            </Suspense>
        </div>
    );
};
