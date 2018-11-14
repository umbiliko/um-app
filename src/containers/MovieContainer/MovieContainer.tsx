import * as React from 'react';
import { Suspense, useState } from 'react';
import Spinner from '../../components/Spinner';
import MovieListPage from './MovieListPage';
import useMovieBox from './useMovieBox';
import { MovieItem, MovieList } from './Movie';

export default () => {
    const [methodCache] = useState(new WeakMap<{ index: number }, { goTo: React.MouseEventHandler }>());
    const box = useMovieBox(-1, false);
    const items = box.state.list
        .map((item: MovieItem, index: number) => {
            if (!methodCache.has({ index })) {
                methodCache.set({ index }, { goTo: () => box.goTo(index) });
            }
            return { ...item, onClick: methodCache.get({ index })!.goTo }
        });

    return (
        <div className="MovieBox">
            <Suspense fallback={<Spinner />}>
                <MovieListPage items={items} />
            </Suspense>
        </div>
    );
};
