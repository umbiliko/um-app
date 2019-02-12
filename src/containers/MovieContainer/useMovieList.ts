import {useEffect, useState} from 'react';
import { MovieList } from './Movie';

export default (id: number): MovieList | null => {
    const [movieList, setMovieList] = useState<MovieList | null>(null);

    useEffect(
        (): (() => void) | void => {
            //setMovie(movieDetailsJson[id]);

            fetch(`/movies/${id}/details`)
                .then((response: Response): Promise<MovieList> => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then((data: MovieList) => setMovieList(data))
                .catch(err => console.log(err));
        },
        [id]
    );

    return movieList;
}
