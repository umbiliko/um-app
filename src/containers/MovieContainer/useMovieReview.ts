import {useEffect, useState} from 'react';
import { MovieReview } from './Movie';

export default (id: number): MovieReview | null => {
    const [movieReview, setMovieReview] = useState<MovieReview | null>(null);

    useEffect(
        (): (() => void) | void => {
            //setMovie(movieDetailsJson[id]);

            fetch(`/movies/${id}/details`)
                .then((response: Response): Promise<MovieReview> => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then((data: MovieReview) => setMovieReview(data))
                .catch(err => console.log(err));
        },
        [id]
    );

    return movieReview;
}
