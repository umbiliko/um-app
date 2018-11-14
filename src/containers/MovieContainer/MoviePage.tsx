import * as React from 'react';
import MovieDetails from './MovieDetails';
import MovieReview from './MovieReview';
import { moviewReviewsJSON, fetchMoviewDetails } from './api/data';
import { createFetcher } from 'future';

export default (props: { id: string }) => {
    return (
        <>
            <MovieDetails id={props.id} />
            <MovieReview id={props.id} />
        </>
    );
};
