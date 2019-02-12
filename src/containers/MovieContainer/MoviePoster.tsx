import * as React from 'react';
import Img from '../../components/Img';

export default (props: { src: string }) => {
    return (
        <Img src={props.src} alt="poster" />
    );
};
