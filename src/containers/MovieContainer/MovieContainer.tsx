import * as React from 'react';
import { Suspense } from 'react';
import Spinner from '../../components/Spinner';
import MovieListPage from './MovieListPage';
import MovieDetails from './MovieDetails';
import useMovieBox from './useMovieBox';

// https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html

export default () => {
    const { items, state: { showDetail, current }, goBackward, goForward, toggleDetail } = useMovieBox(0, 0, false);
    return (
        <div className="MovieBox">
            <nav>
                <button onClick={goBackward}>Go Backward</button>
                <button onClick={goForward}>Go Forward</button>
                <button onClick={toggleDetail}>Toggle Detail</button>
            </nav>
            {showDetail && current && (
                <MovieDetails id={current.id} />
            )}
            <Suspense fallback={<Spinner size="lg" />}>
                <MovieListPage items={items} />
            </Suspense>
        </div>
    );
};
