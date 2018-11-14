import AbortController from 'abort-controller';
import { useEffect, useState } from 'react';
import Movie from './Movie';

export default (id: number): Movie | null => {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(
        (): (() => void) | void => {
            const controller = new AbortController();

            controller.signal.addEventListener('abort', () => {
                console.log('aborted!')
            });

            fetch(
                `/movies/${id}/details`,
                {
                    method: 'get',
                    signal: controller.signal
                })
                .then((response: Response): Promise<Movie> => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then((data: Movie) => setMovie(data))
                .catch(err => console.log(err));

            return controller.abort;
        },
        [id]
    );

    return movie;
}
