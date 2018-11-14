import {useEffect, useState} from 'react';
import Movie from './Movie';

export default (id: number): Movie | null => {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(
        (): (() => void) | void => {
            //setMovie(movieDetailsJson[id]);

            fetch(`/movies/${id}/details`)
                .then((response: Response): Promise<Movie> => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then((data: Movie) => setMovie(data))
                .catch(err => console.log(err));
        },
        [id]
    );

    return movie;
}
