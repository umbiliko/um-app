import * as React from 'react';
import { Suspense } from 'react';
import Spinner from '../../components/Spinner';
import MovieListPage from './MovieListPage';
// import MoviePage from './MoviePage';
import useMovieBox from './useMovieBox';
import createFetcher from "../../../../um-core/src/data/createFetcher";

// https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html
// https://www.youtube.com/watch?list=PLPxbbTqCLbGE5AihOSExAa4wUM-P42EIJ&time_continue=221&v=SCQgE4mTnjU
const moviePageFetcher = createFetcher(
    () => import('./MoviePage')
)

const MoviePageLoader = (props: { id: number; }) => {
    const MoviePage = moviePageFetcher.read().default;
    return (
        <MoviePage {...props} />
    );
};

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
                <MoviePageLoader id={current.id} />
            )}
            <Suspense fallback={<Spinner size="lg" />}>
                <MovieListPage items={items} loadingId={current!.id} />
            </Suspense>
        </div>
    );
};
