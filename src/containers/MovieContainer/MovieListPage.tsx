import * as React from 'react';
import { MovieList } from './Movie';
import Spinner from '../../components/Spinner';

export default ({ items, loadingId }: { items: MovieList, loadingId: number }) => {
    return (
        <ul>
            {items.map(({ id, rating, title, ...props }, index) => (
                <li key={id} {...props}>
                    <h2>{title}</h2>
                    <span>{rating}</span>
                    {(loadingId == index) && (
                        <Spinner size="sm" />
                    )}
                </li>
            ))}
        </ul>
    );
};
