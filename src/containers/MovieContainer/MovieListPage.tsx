import * as React from 'react';
import { MovieList } from './Movie';

export default (props: { items: MovieList }) => {
    return (
        <ul>
            {props.items.map(({ id, rating, title, ...props }) => (
                <li key={id} {...props}>
                    <h2>{title}</h2>
                    <span>{rating}</span>
                </li>
            ))}
        </ul>
    );
};
