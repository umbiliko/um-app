import * as React from 'react';
import { Suspense } from 'react';
import Spinner from '../../components/Spinner';
import MoviePoster from './MoviePoster';
import MovieMetrics from './MovieMetrics';
import Movie from './Movie';

export default (props: Movie) => {
    return (
        <div className="MovieDetails">
            <Suspense fallback={<Spinner size="lg" />}>
                <MoviePoster src={props!.poster} />}
                <h1>{props!.title}</h1>}
                <MovieMetrics {...props} />
            </Suspense>
        </div>
    );
};
