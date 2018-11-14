import Movie, { MoviewDetails, MovieItem } from '../Movie';

export const movieListJson: MovieItem[] = [
    { id: 1, title: 'Lady Bird', rating: '99%' },
    { id: 2, title: 'Downsizing', rating: '50%' },
    { id: 3, title: 'Black Panther', rating: '50%' },
    { id: 4, title: 'A Fantastic Woman', rating: '50%' },
    { id: 5, title: 'Father Figures', rating: '50%' },
    { id: 6, title: 'Early Man', rating: '50%' },
];

export const movieDetailsJson: { [id: number]: MoviewDetails }  = {
    1: { title: 'Lady Bird', rating: '99%', fresh: true, audience: '81%', consensus: '', poster: '/img/bird.jpg' },
    2: { title: 'Downsizing', rating: '50%', fresh: true, audience: '81%', consensus: '', poster: '/img/bird.jpg' },
    3: { title: 'Black Panther', rating: '50%', fresh: true, audience: '81%', consensus: '', poster: '/img/bird.jpg' },
    4: { title: 'A Fantastic Woman', rating: '50%', fresh: true, audience: '81%', consensus: '', poster: '/img/bird.jpg' },
    5: { title: 'Father Figures', rating: '50%', fresh: true, audience: '81%', consensus: '', poster: '/img/bird.jpg' },
    6: { title: 'Early Man', rating: '50%', fresh: true, audience: '81%', consensus: '', poster: '/img/bird.jpg' },
};

export const moviewReviewsJSON = {

};
