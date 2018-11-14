import * as React from 'react';
import { Suspense } from 'react';
import Spinner from '../../components/Spinner';
import MovieListPage from './MovieListPage';
import useMovieBox from './useMovieBox';

export default () => {
    const { items, state: { showDetail } } = useMovieBox(0, 0, false);
    return (
        <div className="MovieBox">
            {showDetail ? (
                <div>
                </div>) : (
                <Suspense fallback={<Spinner />}>
                    <MovieListPage items={items} />
                </Suspense>
            )}
        </div>
    );
};
